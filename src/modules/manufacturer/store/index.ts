const state = {
  manufacturers: []
}
const getters = {
  getManufacturers: (state) => () => {
    return state.manufacturers
  }
}

const actions = {
  loadManufacturers(context) {
    return context.commit('setManufacturers', [{id: 1, name: 'Test'}, {id: 2, name: 'Test 2'}])
  }
}

const mutations = {
  setManufacturers (state, data) {
    state.manufacturers = data
  }
}

export const store = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}