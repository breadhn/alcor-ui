export const state = () => ({
  current: '',
  visible: false,
  context: null
})

export const mutations = {
  setCurrent: (state, value) => (state.current = value),
  setVisible: (state, value) => (state.visible = value),
  setModalContext: (state, value) => (state.context = value)
}

export const actions = {
  login({ commit }, context) {
    commit('setCurrent', 'login')
    commit('setVisible', true)
    context && commit('setModalContext', context)
  },

  createPool({ commit }, context) {
    commit('setCurrent', 'create-pool')
    commit('setVisible', true)
    context && commit('setModalContext', context)
  },

  addLiquidity({ commit }, context) {
    commit('setCurrent', 'add-liquidity')
    commit('setVisible', true)
    context && commit('setModalContext', context)
  },

  migration({ commit }, context) {
    commit('setCurrent', 'migration')
    commit('setVisible', true)
    context && commit('setModalContext', context)
  },

  previewLiquidity({ commit }, context) {
    commit('setCurrent', 'preview-liquidity')
    commit('setVisible', true)
    context && commit('setModalContext', context)
  },

  assets({ commit }, context) {
    commit('setCurrent', 'assets')
    commit('setVisible', true)
    context && commit('setModalContext', context)
  },

  buy({ commit }, context) {
    commit('setCurrent', 'buy-listing')
    commit('setVisible', true)
    if (context) commit('setModalContext', context)
  },

  makeBid({ commit }, context) {
    commit('setCurrent', 'make-bid')
    commit('setVisible', true)
    if (context) commit('setModalContext', context)
  },

  listing({ commit }, context) {
    commit('setCurrent', 'listing')
    commit('setVisible', true)
    commit('setModalContext', context)
  },

  newTrade({ commit }, context) {
    commit('setCurrent', 'trade')
    commit('setVisible', true)
    commit('setModalContext', context)
  },

  burn({ commit }, context) {
    commit('setCurrent', 'burn')
    commit('setVisible', true)
    commit('setModalContext', context)
  },

  back({ commit }, context) {
    commit('setCurrent', 'back')
    commit('setVisible', true)
    commit('setModalContext', context)
  },

  gift({ commit }, context) {
    commit('setCurrent', 'gift')
    commit('setVisible', true)
    commit('setModalContext', context)
  },

  transfer({ commit }, context) {
    commit('setCurrent', 'transfer')
    commit('setVisible', true)
    commit('setModalContext', context || null)
  },

  makeOffer({ commit }, context) {
    commit('setCurrent', 'make-offer')
    commit('setVisible', true)
    if (context) commit('setModalContext', context)
  },

  addFriend({ commit }, context) {
    commit('setCurrent', 'add-friend')
    commit('setVisible', true)
    if (context) commit('setModalContext', context)
  },

  removeFriend({ commit }, context) {
    commit('setCurrent', 'remove-friend')
    commit('setVisible', true)
    commit('setModalContext', context)
  },

  blockUser({ commit }, context) {
    commit('setCurrent', 'block-user')
    commit('setVisible', true)
    commit('setModalContext', context)
  },

  closeModal({ commit }) {
    commit('setVisible', false)
    commit('setModalContext', null)
  }
}
