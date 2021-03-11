const state = {
    masts: []
}

const getters = {
    MASTS: state => state.masts
}

const mutations = {
    _ADD_MAST: (state, mast) => {
        const index = state.masts.findIndex(({id}) => id === mast.id)

        if (index > -1) {
            state.masts.splice(index, 1)
        }

        state.masts.push(mast)
    }
}

const actions = {
    ADD_MAST: (context, mast) => {
        context.commit('_ADD_MAST', mast)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}