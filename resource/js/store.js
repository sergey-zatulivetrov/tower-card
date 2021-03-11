import antennas from 'App/modules/antennas'
import cards from 'App/modules/cards'
import masts from 'App/modules/masts'
import stations from 'App/modules/stations'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        cards,
        stations,
        masts,
        antennas
    }
})

export default store