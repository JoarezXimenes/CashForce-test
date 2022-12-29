import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { createApp } from 'vue';
import { FaRegularHandshake, BiGearFill } from 'oh-vue-icons/icons';
import App from './App.vue';
import router from './router';
import store from './store';

addIcons(FaRegularHandshake, BiGearFill);

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.use(store);
app.use(router);
app.mount('#app');
