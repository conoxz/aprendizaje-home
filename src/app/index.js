import Vue from 'vue';
import App from './components/App.vue';
import Login from './components/login.vue';
import Reg from './components/register.vue';

new Vue({
    render: h=>h(App)
}).$mount('#app');

new Vue({
    render: h=>h(Login)
}).$mount('#login');

new Vue({
    render: h => h(Reg)
}).$mount('#registro');


