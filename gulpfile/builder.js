'use strict'

export default function builder(builds) {
    return function builder(callback) {
        builds.forEach(build => build(callback))
    }
}