'use strict'

import {resolve} from 'path'
import {watch, task, series} from 'gulp'
import builder from './gulpfile/builder'
import gulpJS from './gulpfile/gulpJS'
import watcher from './gulpfile/watcher'
import cleaner from './gulpfile/cleaner'
import gulpSCSS from './gulpfile/gulpSCSS'

const builds = [
    gulpSCSS(resolve('resource', 'scss', 'index.scss'), 'build.css'),
    gulpJS(resolve('resource', 'js', 'index.js'), 'build.js')
]

task('clean', cleaner)

task('build', builder(builds))

task('watch', series(builder(builds), watcher(builds)))