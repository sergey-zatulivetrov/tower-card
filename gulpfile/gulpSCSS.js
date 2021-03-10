'use strict'

import {dest, src} from 'gulp'
import prefixer from 'gulp-autoprefixer'
import debug from 'gulp-debug'
import gulpIf from 'gulp-if'
import cssmin from 'gulp-minify-css'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import tildeImporter from 'node-sass-tilde-importer'
import yargs from 'yargs'
import pathBuild from './pathBuild'

export default function gulpSCSS(entry, name) {
    const production = !!yargs.argv.production

    return function gulpSCSS(callback) {
        src(entry)
            .pipe(gulpIf(production, sourcemaps.init()))
            .pipe(plumber({
                errorHandler: e => console.log(e.message)
            }))
            .pipe(sass({
                sourceMap: true,
                errLogToConsole: true,
                importer: tildeImporter
            }))
            .pipe(prefixer())
            .pipe(cssmin())
            .pipe(plumber.stop())
            .pipe(gulpIf(production, sourcemaps.write()))
            .pipe(rename(name))
            .pipe(dest(pathBuild()))
            .pipe(debug({
                title: 'CSS files',
                showCount: false
            }))

        callback()
    }
}
