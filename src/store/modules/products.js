import axios from "axios";

export default {
    // namespaced: true,

    state: {
        products: [
            {id: 1, name: 'Колбаса вареная Молочная', price: 150, unit: 'шт', img: 'Kolbasa_varennaya_Molochnaya.png'},
            {id: 2, name: 'Охотничие колбаски ГОСТ', price: 600, unit: 'шт', img: 'Ohotnich_kolbaski_GOST.png'},
            {id: 3, name: 'Полукопченная Армавирская ГОСТ', price: 500, unit: 'шт', img: 'Polukopchyonnaya_Armavarskaya_GOST.png'},
            {id: 4, name: 'Полукопченные колбаски элитные', price: 600, unit: 'кг', img: 'Polukopchyonnye_kolbaski_Elitnye_3_sort.png'},
            {id: 5, name: 'Сосиски Кроха', price: 350, unit: 'шт', img: 'Sosiski_kroha.png'},
            {id: 6, name: 'Полукопченная Армавирская ГОСТ', price: 250, unit: 'шт', img: 'Polukopchyonnaya_Armavarskaya_GOST.png'},
            {id: 7, name: 'Cтаромосковская вареная копченая', price: 200, unit: 'шт', img: 'Staromoskovskaya_varyono_kopchyonnaya.png'},
        ],
    },

    getters: {
        PRODUCTS: state => state.products,
        // PRODUCTS_NEWS: state => state.products.filter(product => product.news),
        // PRODUCTS_SALE: state => state.products.filter(product => product.sale > 0),
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

        // GET_PRODUCTS: async ({commit}) => {
        //     await axios.get('/api/product')
        //         .then(response => {
        //             if (response.data.products) {
        //                 commit('SET_PRODUCTS', response.data.products);
        //             }
        //             return response
        //         })
        //         .catch(error => {
        //             // TODO нужно обработать ошибку и что-то сделать если не придут продукты
        //             console.log(error);
        //             return error
        //         });
        // },
    }
}
