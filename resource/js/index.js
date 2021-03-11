import Vue from 'vue'
import store from 'App/store'
import App from 'App/components/App'

new Vue({
    el: '#app',
    store: store,
    render: h => h(App)
})
