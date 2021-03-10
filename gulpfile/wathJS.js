'use strict'

import {resolve} from 'path'
import {watch} from 'gulp'

export default function watchJS(build) {
    watch(resolve('resource', '**', '*.js'), build)
}
