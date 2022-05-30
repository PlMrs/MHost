export const state = () => ({
    showed : "swipe"
})

export const mutations = {
    change(state,text) {
      state.showed = text
    },
  }