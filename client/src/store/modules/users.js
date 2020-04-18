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
      state.users = users
    },

    insertUser (state, newUser) {
      state.users.push(newUser)
    },
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
    insertUser ({ state, commit }, user) {
      axios
        .post('/api/user/insert', user)
        .then(res => {
          commit('insertUser', res.data)
        })
        .catch(error => console.log('insertUser -> error', error))
    },
  },
}
