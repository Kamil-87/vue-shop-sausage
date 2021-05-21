import axios from "axios";

export default {
    namespaced: true,

    state: {
        products: [],
    },

    getters: {
        PRODUCTS: state => state.products,
        PRODUCTS_NEWS: state => state.products.filter(product => product.news),
        PRODUCTS_SALE: state => state.products.filter(product => product.sale > 0),
        PRODUCT_ONE: state => id => state.products.find(item => item.id === id)
    },

    mutations: {
        SET_PRODUCTS: (state, products) => {
            state.products = products;
        },
    },

    actions: {
      // async load(store){
      //   let items = await makeRequest('/api/product');
      //   store.commit('SET_PRODUCTS', items);
      // },

        GET_PRODUCTS: async ({commit}) => {
            await axios.get('/api/product')
                .then(response => {
                    if (response.data.products) {
                        commit('SET_PRODUCTS', response.data.products);
                    }
                    return response
                })
                .catch(error => {
                    // TODO нужно обработать ошибку и что-то сделать если не придут продукты
                    console.log(error);
                    return error
                });
        },
    }
}
