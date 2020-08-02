import Vue from "vue";
import App from "./app.vue";
import router from './router/index';
import store from './store/index';
import axios from 'request/index';

// 全局注册组件
import registerComponents from 'components/register-global-components';
registerComponents();

Vue.prototype.$axios = axios;

new Vue({
	el:"#app",
	router,
	store,
	render:(h)=>h(App)
});
