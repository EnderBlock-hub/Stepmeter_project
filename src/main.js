//import Vue from 'vue'
import { createApp, h } from 'vue'

const NotFoundComponent = { template: '<p>Страница не найдена</p>' }
import Home from '@/views/HomePage'
import ViewSteps from '@/views/ViewSteps'

const routes = {
  '/': Home,
  '/steps': ViewSteps
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent
    }
  },

  render() {
    return h(this.CurrentComponent)
  }
}



createApp(SimpleRouter).mount('#app')
