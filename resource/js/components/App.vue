<template>
    <div class='container py-5 px-2'>
        <button
            class='btn btn-primary'
            v-on:click='handleData'
            v-bind:disabled='isLoading'
        >
            Загрузить карточки
        </button>
    </div>
</template>
<script>
import dataRequest from 'App/requests/dataRequest'

export default {
    data: function () {
        return {
            isLoading: false
        }
    },
    methods: {
        handleData() {
            this.isLoading = true
            dataRequest(({success, response}) => {
                this.isLoading = false

                if (success) {
                    console.log(response)
                }
            })
        }
    }
}
</script>