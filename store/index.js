export const state = () => ({
  mute: false,
  path: null,
  mobile: false,
  fullscreen: false,
  winSize: [1200, 1200],
})

export const mutations = {
  set(state, props) {
    for (let p in props) state[p] = props[p]
  },
}

export const actions = {}
