// modules/giscus.ts

import { addComponent, defineNuxtModule } from "nuxt/kit"

export default defineNuxtModule({
    meta: {
        name: 'giscus',
    },
    setup() {
        addComponent({
            name: 'Giscus',
            export: 'default',
            filePath: '@giscus/vue',
        })
    },
})
