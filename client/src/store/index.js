import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import kickstarter from './modules/kickstarter'
import machineLearning from './modules/machine-learning';

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    users,
    kickstarter,
    machineLearning
  },

  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg',
    drawer: null,
  },

  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
  },

})
