import axios from 'axios'

export default {
  namespaced: true,

  state: {
    users: [],
  },

  getters: {
    getUsers (state, getters) {
      return state.users
    },
  },

  mutations: {
    setUsers (state, users) {
      state.users = users;
    },

    deleteUser (state, userIndex) {
      state.users.splice(userIndex, 1)
    },

    updateUser (state, userData) {
      Object.assign(state.users[userData.userIndex], userData.user);
    },

    insertUser (state, userData) {
      state.users.push(userData);
    }
  },

  actions: {
    getAllUsers ({ state, commit }) {
      axios
        .get('/api/user/all')
        .then(res => {
          commit('setUsers', res.data)
        })
        .catch(error => console.log('getAllUsers -> error', error))
    },

    deleteUser({state, commit, rootState}, user) {
      axios
      .delete(`/api/user/delete-by-id/${user.item.id}`).
      then(res => {
        commit("deleteUser", user.index);
      })
      .catch(error => console.log("deleteUser -> error", error));
    },

    insertUser ({ state, commit }, user) {
      axios
        .post('/api/user/insert', user)
        .then(res => {
          commit('insertUser', res.data)
        })
        .catch(error => console.log('insertUser -> error', error))
    },
  
    updateUser({state, commit, rootState}, userData) {
      console.log("updateUser -> userData", userData)
      axios
        .put(
          '/api/user/update',
          {
            id: userData.user.id,
            firstName: userData.user.firstName,
            lastName: userData.user.lastName,
            isActive: userData.user.isActive,
          }
        )
        .then(res => {
          commit("updateUser", userData);
        })
        .catch(error => console.log("updateUser -> error", error));
    },
  },
}
