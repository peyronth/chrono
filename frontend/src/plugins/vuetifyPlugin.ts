import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { App } from 'vue'

export default {
    install: (vueApp: App) => {
        const vuetify = createVuetify({
            components,
            directives
        })
    
        vueApp.use(vuetify)
        vueApp.provide('vuetify', vuetify)
    }
}