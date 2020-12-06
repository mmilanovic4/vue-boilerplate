import Vue from 'vue';
import Fragment from 'vue-fragment';
import App from 'Client/App.vue';

Vue.use(Fragment.Plugin);

new Vue({
	el: '#root',
	render: (h) => h(App)
});
