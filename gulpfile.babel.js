'use strict'

import {task, series} from 'gulp'
import builder from './gulpfile/builder'
import watcher from './gulpfile/watcher'
import cleaner from './gulpfile/cleaner'
import builds from './builds'

task('clean', cleaner)

task('build', builder(builds))

task('watch', series(builder(builds), watcher(builds)))