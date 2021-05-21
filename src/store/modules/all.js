export default {
    state: {
        // поиск
        searchValue: '',
    },

    getters: {
        // поиск
        SEARCH_VALUE: state => state.searchValue

    },

    mutations: {
        // поиск
        SET_SEARCH_VALUE: (state, value) => {
            state.searchValue = value
        }
    },

    actions: {
        // поиск
        GET_SEARCH_VALUE: ({commit}, value) => {
            commit('SET_SEARCH_VALUE', value)
        }
    }
}
