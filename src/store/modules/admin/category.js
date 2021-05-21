import axios from "axios";

export default {
  namespaced: true,
  state: {

  },

  getters: {

  },

  mutations: {

  },

  actions: {
    async PRODUCTS_IMPORT ({dispatch, state}, credentials) {
      await axios.get('/sanctum/csrf-cookie');
      const answer = await axios.post('/api/admin/category', credentials)
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
