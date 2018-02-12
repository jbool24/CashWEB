const path    = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin   = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, '../../static'),
    SRC: path.resolve(__dirname, '../../src'),
    HTML: path.resolve(__dirname, '../../templates')
};

module.exports = () => {
    return {
        context: paths.SRC,
        entry: {
            'main': './app',
            'vendor': ['react', 'react-dom'],
            'style': './sass/main.scss',
        },
        resolve: {
            extensions: ['.sass','.scss', '.js', '.json'],
            modules: [paths.SRC, 'node_modules'],
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: ['/config/', '/node_modules/'],
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        },
                    }],
                }, {
                    test: /\.(sass|scss)$/,
                    include: path.join(paths.SRC, '/sass'),
                    use: ExtractTextPlugin.extract({
                        // fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: false,
                                    minimize: true,
                                    sourceMaps: true
                                }
                            }, {
                                loader: 'sass-loader',
                                options: {
                                    modules: false,
                                    sourceMaps: 'inline'
                                }
                            }
                        ]
                    })
                }, {
                    test: /\.(jpeg|jpg|png|gif)$/,
                    use: 'file-loader'
                }],
        },
        plugins: [
            new DashboardPlugin(),
            new ExtractTextPlugin({
                filename: 'css/[name].min.css',
                // disable: process.env.NODE_ENV === 'development'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['vendor', 'manifest'],
                filename: 'js/[name].bundle.js',
                minChunks: Infinity
            }),
            new HtmlWebpackPlugin({
                template: path.join(paths.HTML, './_base.html'),
                filename: '../templates/app_shell/shell.html',
                inject: 'body',
            }),
        ],
    };
};
