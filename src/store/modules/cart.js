import axios from "axios";

window.Vue = require('vue');

export default {
    state: {
        cart: JSON.parse(localStorage.getItem('cart' ) || '[]'),
        // cartCount: 0,
        last_cart: [],
    },
    getters: {
        CART: state => {
            return state.cart
        },
        TOTAL_PRICE_CART: state => {
            return state.cart.reduce((total, product) => {
                return total + product.quantity * product.price
            }, 0)
        },
        LAST_CART: state => {
            return state.last_cart;
        }
    },
    mutations: {
        // TOTAL_PRICE_PRODUCT: (state, index) => {
        //     const cartItem = state.cart.find(item => item.id === index);
        //     cartItem.totalPriceProduct = cartItem.quantity * cartItem.price
        // },

        PUSH_PRODUCT_TO_CART: (state, product) => {
            state.cart.push(product);
            Vue.set(product, 'quantity', 1);
            Vue.set(product, 'totalPriceProduct', product.price);
        },

        SAVE_CART: (state) => {
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },

        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },

        INCREMENT: (state, index) => {
            const cartItem = state.cart.find(item => item.id === index);
            cartItem.quantity++
            cartItem.totalPriceProduct = cartItem.quantity * cartItem.price
        },

        DECREMENT: ( state, index) => {
            const cartItem = state.cart.find(item => item.id === index);
            if (cartItem.quantity > 1) {
                cartItem.quantity--
                cartItem.totalPriceProduct = cartItem.quantity * cartItem.price
            }
        },
        DELETE_ALL_CART: (state) => {
            state.cart = [];
        },
        SET_LAST_CART: (state) => {
            state.last_cart = [];
            state.last_cart = state.cart;
        }
    },
    actions: {
        ADD_TO_CART: ({commit, state}, product) => {
            const cartItem = state.cart.find(item => item.id === product.id)
            if (!cartItem) {
                commit('PUSH_PRODUCT_TO_CART', product)
            } else {
                commit('INCREMENT', product.id)
            }
            commit('SAVE_CART')
        },

        DECREMENT_TO_PRODUCT: ({commit}, index) => {
            commit('DECREMENT', index)
            commit('SAVE_CART')
        },
        INCREMENT_TO_PRODUCT: ({commit}, index) => {
            commit('INCREMENT', index)
            commit('SAVE_CART')
        },

        DELETE_FROM_CART: ({commit}, index) => {
            commit('REMOVE_FROM_CART', index);
            commit('SAVE_CART')
        },

        CLEAR_CART: ({commit}) => {
            localStorage.clear();
            commit('DELETE_ALL_CART');
        },

        FIXED_LAST_CART: ({commit}) => {
            commit('SET_LAST_CART');
        },

        async API_ADD_CART ({ dispatch }, credentials) {
            await axios.get('/sanctum/csrf-cookie');
            const answer = await axios.post('/api/basket', credentials)
              .then((response) => {
                  return response;
              })
              .catch((error) => {
                  return error.response;
              });
            return answer;
        },
    }
}
