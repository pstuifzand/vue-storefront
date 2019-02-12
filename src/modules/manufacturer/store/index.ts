import fetch from 'isomorphic-fetch'

const state = {
  manufacturers: []
}
const getters = {
  getManufacturers: (state) => () => {
    return state.manufacturers
  }
}

const actions = {
  loadManufacturers(context, url) {
    return fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    })
      .then(response => response.json())
      .then(data => {
        if (data.code === 200) {
          return context.commit('setManufacturers', data.result.manufacturers)
        }
      })
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