'use strict'

import {resolve} from 'path'
import gulpJS from './gulpfile/gulpJS'
import gulpSCSS from './gulpfile/gulpSCSS'

const builds = [
    gulpSCSS(resolve('resource', 'scss', 'index.scss'), 'build.css'),
    gulpJS(resolve('resource', 'js', 'index.js'), 'build.js')
]

export default builds