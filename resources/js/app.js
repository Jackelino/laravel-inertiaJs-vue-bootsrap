//require('./bootstrap');
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(bootstrap)
      .mount(el)
  },
})
