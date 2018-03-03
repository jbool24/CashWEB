const path          = require('path');
const webpack       = require('webpack');
const webpackMerge  = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { paths, getBaseConfig } = require('./base.js');


module.exports = () => {
    return webpackMerge(getBaseConfig(), {
        bail: true,
        entry: {
            'main': './app',
            'vendor': ['react', 'react-dom', 'react-router-dom', 'semantic-ui-react', ],
            'style': './sass/main.scss',
        },
        devtool: 'source-map',
        output: {
            path: paths.DIST,
            filename: 'js/[hash].[name].bundle.js',
            publicPath: path.resolve(paths.DIST),
            sourceMapFilename: 'js/[name].map'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(paths.HTML, './_base.html'),
                filename: path.join(paths.HTML, './shell/shell.html'),
                inject: 'body',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                },
            }),
            new ExtractTextPlugin({
                filename: 'css/[name].min.css',
                // disable: process.env.NODE_ENV === 'development'
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
        ]
    });
};
