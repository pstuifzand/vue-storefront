import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'
import { store } from './store'

const KEY = 'manufacturer'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  store: { modules: [{ key: KEY, module: store }] },
}

export const Manufacturers = new VueStorefrontModule(moduleConfig)