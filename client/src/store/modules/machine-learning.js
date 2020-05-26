import axios from 'axios'

export default {
  namespaced: true,

  state: {
    prediction: 0,
    predictionDialog: false,
  },

  getters: {
    getPrediction (state) {
      return state.prediction;
    },
    getPredictionDialog (state) {
      return state.predictionDialog;
    },
  },

  mutations: {
    setPrediction (state, prediction) {
      state.prediction = prediction;
      state.predictionDialog = true;
    },
    resetPredictionDialog(state) {
      state.predictionDialog = false;
    }
  },

  actions: {
    predict ({ state, commit }, projectFormData) {
      console.log("predict -> projectFormData", projectFormData)
      axios
        .post('https://us-central1-finance-k8s.cloudfunctions.net/kickstarter_predict', projectFormData)
        .then(res => {
          console.log("predict -> res", res)
          commit('setPrediction', res.data.prediction_probability)
        })
        .catch(error => console.log("predict -> error", error))
    },
  },
}
