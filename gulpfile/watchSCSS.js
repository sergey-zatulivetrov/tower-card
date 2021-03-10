'use strict'

import {resolve} from 'path'
import {watch} from 'gulp'

export default function watchSCSS(build) {
    watch(resolve('resource', '**', '*.scss'), build)
}
