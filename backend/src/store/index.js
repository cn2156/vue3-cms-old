import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      breadcrumb: {}
    }
  },
  mutations: {
    addBreadcrumb (state, payload) {
      if (!state.breadcrumb[payload.key]) {
        state.breadcrumb[payload.key] = []
      }
      // console.log(state.breadcrumb[payload.key])
      // if (!state.breadcrumb[payload.key].find(payload.item)) {
      //   state.breadcrumb[payload.key].push(payload.item)
      // }
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
