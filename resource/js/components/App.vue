<template>
    <div class='container py-5 px-2'>
        <button
            class='btn btn-primary'
            v-bind:class='{"btn-dark": isLoading}'
            v-bind:disabled='isLoading'
            v-on:click='handleLoad'
        >
            Загрузить данные
        </button>
    </div>
</template>
<script>
import dataRequest from 'App/requests/dataRequest'
import parseModel from 'App/helper/parseModel'
import Card from 'App/models/Card'
import Station from 'App/models/Station'
import Mast from 'App/models/Mast'
import Antenna from 'App/models/Antenna'

export default {
    data: () => ({
        isLoading: false
    }),
    methods: {
        async handleLoad() {
            this.isLoading = true
            await dataRequest(({success, response}) => {
                if (success) {
                    response.forEach(item => {
                        const model = parseModel(item)

                        if (model instanceof Card) {
                            this.$store.dispatch('ADD_CARD', model)
                        }

                        if (model instanceof Station) {
                            this.$store.dispatch('ADD_STATION', model)
                        }

                        if (model instanceof Mast) {
                            this.$store.dispatch('ADD_MAST', model)
                        }

                        if (model instanceof Antenna) {
                            this.$store.dispatch('ADD_ANTENNA', model)
                        }
                    })

                }
            })
            this.isLoading = false
        }
    }
}
</script>