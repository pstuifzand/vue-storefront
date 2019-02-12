import Manufacturers from '../components/ManufacturerList.vue'
import Manufacturer from '../components/ManufacturerTile.vue'

export function afterRegistration({ Vue, config, store, isServer }) {
  Vue.use(Manufacturers)
}
