
const version = '0.0.8'
const install = function (Vue, config = {}) {
  if (install.installed) return
  Vue.use(require('vc-popup-base'))
  require('../../src/components/popup-dom-relative')
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version
}
