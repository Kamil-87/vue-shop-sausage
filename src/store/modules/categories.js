import axios from "axios";

export default {
    state: {
        categories: [],
    },

    getters: {
        CATEGORIES: state => {
            return state.categories;
        },
    },

    mutations: {
        SET_CATEGORIES: (state, payload) => {
            state.categories = payload;
        },
    },

    actions: {
        GET_CATEGORIES: async (context) => {
            axios.get('/api/category')
                .then(response => {
                    if (response.data.categories) {
                        context.commit('SET_CATEGORIES', response.data.categories);
                    }
                })
                .catch(error => {
                    // TODO нужно обработать ошибку и что-то сделать если не придут продукты
                    console.log(error);
                });
        },
    }
}
