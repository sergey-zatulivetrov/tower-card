const state = {
    stations: []
}

const getters = {
    STATIONS: state => state.stations
}

const mutations = {
    _ADD_STATION: (state, station) => {
        const index = state.stations.findIndex(({id}) => id === station.id)

        if (index > -1) {
            state.stations.splice(index, 1)
        }

        state.stations.push(station)
    }
}

const actions = {
    ADD_STATION: (context, station) => {
        context.commit('_ADD_STATION', station)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}