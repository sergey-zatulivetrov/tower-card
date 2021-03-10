'use strict'

import gulpSCSS from './gulpSCSS'
import watchSCSS from './watchSCSS'
import gulpJS from './gulpJS'
import watchJS from './wathJS'

export default function watcher(builds) {
    return function watcher() {
        builds.forEach(build => {
            switch (build.name) {
                case gulpSCSS.name:
                    return watchSCSS(build)
                case gulpJS.name:
                    return watchJS(build)
            }
        })
    }
}
