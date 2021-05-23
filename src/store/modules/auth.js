import axios from 'axios'

export default {
  namespaced: true,

  state: {
    AUTHENTICATED: false,
    USER: null,
    ADMIN: false,
  },

  getters: {
    AUTHENTICATED (state) {
      return state.AUTHENTICATED
    },
    USER (state) {
      return state.USER
    },
    ADMIN (state) {
      return state.ADMIN
    },
  },

  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.AUTHENTICATED = value
    },
    SET_USER (state, value) {
      state.USER = value
    },
    SET_ADMIN(state, value) {
      state.ADMIN = value
    }
  },

  actions: {
    async SIGN_IN ({ dispatch }, credentials) {
      await axios.get('/sanctum/csrf-cookie'); // здесь случайно не нужен try catch?
      const answer = await axios.post('http://shop-sausage/login', credentials)
        .then((response) => {
          if (response.status === 204) {
            dispatch('ME');
          }
          return response;
        })
        .catch((error) => {
          return error.response;
        });
      return answer;
    },

    async SIGN_OUT ({ dispatch }) {
      await axios.post('http://shop-sausage/logout');

      return dispatch('ME')
    },

    async REGISTER ({ dispatch }, credentials) {
      await axios.get('/sanctum/csrf-cookie');
      const answer = await axios.post('http://shop-sausage/register', credentials)
        .then((response) => {
          if (response.status === 201) {
            dispatch('ME');
          }
          return response;
        })
        .catch((error) => {
          return error.response;
        });
      return answer;
    },

    async UPDATE ({dispatch, state}, credentials) {
      await axios.get('/sanctum/csrf-cookie');
      const answer = await axios.put('http://shop-sausage/api/user', credentials,)
        .then((response) => {
          if (response.status === 204) {
            dispatch('ME');
          }
          return response;
        })
        .catch((error) => {
          return error.response;
        });
      return answer;
    },

    ME ({ commit }) {
      return axios.get('http://shop-sausage/api/user')
        .then((response) => {
          commit('SET_AUTHENTICATED', true);
          commit('SET_USER', response.data);
          if(response.data.is_admin) {
            commit('SET_ADMIN', true);
          }
      })
        .catch((error) => {
          commit('SET_AUTHENTICATED', false);
          commit('SET_USER', null);
          console.log(error);
        })
    }
  }
}
