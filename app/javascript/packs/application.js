import Vue from 'vue'
import App from 'components/app'
import Style from 'src/application.scss'

document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue ({
        el: '#app',
        render: h => h(App)
    })
})