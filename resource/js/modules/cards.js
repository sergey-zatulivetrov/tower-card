const state = {
    cards: []
}

const getters = {
    CARDS: state => state.cards
}

const mutations = {
    _ADD_CARD: (state, card) => {
        const index = state.cards.findIndex(({id}) => id === card.id)

        if (index > -1) {
            state.cards.splice(index, 1)
        }

        state.cards.push(card)
    }
}

const actions = {
    ADD_CARD: (context, card) => {
        context.commit('_ADD_CARD', card)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}