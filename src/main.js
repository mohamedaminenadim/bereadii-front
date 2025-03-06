import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faHeart,
  faCalendar,
  faUser,
  faSearch,
  faUsers,
  faUserPlus,
  faChevronLeft,
  faChevronRight,
  faEdit,
  faTrash,
  faPlus,
  faBars,
  faPerson,
  faPersonDress,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHome,
  faHeart,
  faCalendar,
  faUser,
  faSearch,
  faUsers,
  faUserPlus,
  faChevronLeft,
  faChevronRight,
  faEdit,
  faTrash,
  faPlus,
  faBars,
  faPerson,
  faPersonDress,
)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
