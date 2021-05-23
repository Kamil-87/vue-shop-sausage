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
      const answer = await axios.post('http://shop-sausage/api/admin/product/import', credentials, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
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
