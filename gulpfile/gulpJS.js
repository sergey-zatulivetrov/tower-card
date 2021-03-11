'use strict'

import plumber from 'gulp-plumber'
import {VueLoaderPlugin} from 'vue-loader'
import compiler from 'webpack'
import webpack from 'webpack-stream'
import {dest, src} from 'gulp'
import debug from 'gulp-debug'
import yargs from 'yargs'
import pathBuild from './pathBuild'
import webpackConfig from '../webpack.config'
import ESLintWebpackPlugin from 'eslint-webpack-plugin'

export default function gulpJS(entry, name) {
    const production = !!yargs.argv.production

    const config = {
        ...(webpackConfig || {}),
        mode: production ? 'production' : 'development',
        devtool: production ? false : 'source-map',
        entry,
        output: {
            path: pathBuild(),
            filename: name
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ]
        },
        plugins: [
            ...(webpackConfig?.plugins || []),
            new VueLoaderPlugin(),
            new ESLintWebpackPlugin({
                extensions: ['js']
            })
        ]
    }

    return function gulpJS(callback) {
        src(entry)
            .pipe(plumber({
                errorHandler: e => console.log(e.message)
            }))
            .pipe(webpack(config), compiler)
            .pipe(plumber.stop())
            .pipe(dest(pathBuild()))
            .pipe(debug({
                title: 'JS files',
                showCount: false
            }))

        callback()
    }
}
