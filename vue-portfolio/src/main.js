import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './assets/tailwind.css'

/* add icons to the library */
library.add(faUserSecret, faInstagram, faLinkedin, faGithub)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
