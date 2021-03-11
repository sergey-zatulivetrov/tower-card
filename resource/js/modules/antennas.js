const state = {
    antennas: []
}

const getters = {
    ANTENNAS: state => state.antennas
}

const mutations = {
    _ADD_ANTENNA: (state, antenna) => {
        const index = state.antennas.findIndex(({id}) => id === antenna.id)

        if (index > -1) {
            state.antennas.splice(index, 1)
        }

        state.antennas.push(antenna)
    }
}

const actions = {
    ADD_ANTENNA: (context, antenna) => {
        context.commit('_ADD_ANTENNA', antenna)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}