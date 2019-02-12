import Manufacturers from '../components/Manufacturers.vue'
import Manufacturer from '../components/Manufacturer.vue'

export function afterRegistration({ Vue, config, store, isServer }) {
  Vue.use(Manufacturers)
}
