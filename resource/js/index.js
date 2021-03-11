import Vue from 'vue'
import App from 'App/components/App'

new Vue({
    el: '#app',
    render(createElement) {
        return createElement(App)
    }
})
