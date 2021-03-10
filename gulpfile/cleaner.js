'use strict'

import rimraf from 'rimraf'
import pathBuild from './pathBuild'

export default function cleaner(callback) {
    rimraf(pathBuild(), callback)
}
