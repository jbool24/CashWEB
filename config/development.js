const path         = require('path');
const webpack      = require('webpack');
const autoprefixer = require('autoprefixer');
const webpackMerge = require('webpack-merge');

// Plugins
// const HtmlWebpackPlugin    = require('html-webpack-plugin');
const RewriteImportPlugin    = require('less-plugin-rewrite-import');
const ExtractTextPlugin      = require('extract-text-webpack-plugin');
const ManifestRevisionPlugin = require('manifest-revision-webpack-plugin');

const {paths, getBaseConfig} = require('./base.js');

const isDev =  process.env.NODE_ENV === 'development';

const cssClassName = isDev
    ? '[path][name]__[local]--[hash:base64:5]'
    : '[hash:base64:5]';

// Options for autoPrefixer
const autoprefixerOptions = {
    browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
    ],
    flexbox: 'no-2009',
};

module.exports = () => {
    return webpackMerge(getBaseConfig(), {
        entry: [
            'react-hot-loader/patch',
            require.resolve('react-dev-utils/webpackHotDevClient'),
            './app',
        ],
        output: {
            path: paths.STATIC,
            filename: 'js/[hash].[name].bundle.js',
            chunkFilename: 'js/[id].[chunckhash].js',
            publicPath: 'http://localhost:3000/',
            sourceMapFilename: 'js/[name].map'
        },
        devtool: 'eval',
        devServer: {
            port: 3000,
            host: 'localhost',
            https: false,
            hot: true,
            inline: true,
            noInfo: false,
            overlay: {
                warnings: true,
                errors: true
            },
            // stats: 'minimal',
            compress: true,
            publicPath: '/',
            // contentBase: 'static/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            disableHostCheck: false && isDev,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: ['/config/', '/node_modules/'],
                    use: [{
                        loader: 'babel-loader',
                    }],
                }, {
                    test: /(\.less|theme\.config)$/,
                    exclude: [
                        path.resolve(paths.SRC, 'components'),
                    ],
                    use: ExtractTextPlugin.extract({
                        fallback: {
                            loader: 'style-loader',
                            options: {
                                hmr: isDev,
                            },
                        },
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1,
                                    minimize: !isDev,
                                    sourceMap: true,
                                },
                            }, {
                                loader: require.resolve('postcss-loader'),
                                options: {
                                    ident: 'postcss',
                                    plugins: () => [
                                        require('postcss-flexbugs-fixes'),
                                        autoprefixer(autoprefixerOptions),
                                    ],
                                },
                            }, {
                                loader: require.resolve('less-loader'),
                                options: {
                                    plugins: [
                                        new RewriteImportPlugin({
                                            paths: {
                                                'theme.config':  '../cashweb/client/src/styles/theme.config',
                                            },
                                        }),
                                    ],
                                }
                            }
                        ]
                    }),
                }, {
                    test: /\.less$/,
                    include: [
                        path.resolve(paths.SRC, 'components'),
                    ],
                    use: ExtractTextPlugin.extract({
                        fallback: {
                            loader: require.resolve('style-loader'),
                            options: {
                                hmr: isDev,
                            },
                        },
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1,
                                    localIdentName: cssClassName,
                                    modules: true,
                                    minimize: !isDev,
                                    sourceMap: true,
                                },
                            }, {
                                loader: require.resolve('postcss-loader'),
                                options: {
                                    // Necessary for external CSS imports to work
                                    // https://github.com/facebookincubator/create-react-app/issues/2677
                                    ident: 'postcss',
                                    plugins: () => [
                                        require('postcss-flexbugs-fixes'),
                                        autoprefixer(autoprefixerOptions),
                                    ],
                                },
                            }, {
                                loader: require.resolve('less-loader')
                            }
                        ],
                    }),
                }, {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader: require.resolve('url-loader'),
                    options: {
                        limit: 10000,
                        name: 'media/[name].[hash:8].[ext]',
                    },
                }, {
                    test: [/\.ico$/, /\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'media/[name].[hash:8].[ext]',
                        },
                    }],
                }, {
                    test: [/\.woff$/, /\.woff2$/],
                    use: [{
                        loader: 'url-loader',
                        options: {
                            name: 'fonts/[name].[hash:8].[ext]',
                        },
                    }],
                }
            ],
        },
        plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            // new DashboardPlugin(),
            new ExtractTextPlugin({
                filename: 'css/[name].[contenthash:8].css',
                disable: process.env.NODE_ENV === 'development'
            }),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: ['vendor', 'manifest'],
            //     filename: 'js/[hash].[name].bundle.js',
            //     minChunks: Infinity
            // }),
            // new HtmlWebpackPlugin({
            //     template: path.join(paths.HTML, './_base.html'),
            //     filename: path.join(paths.HTML, './shell/shell.html'),
            //     inject: false, // 'body',
            // }),
            new ManifestRevisionPlugin(path.join(paths.PROJECT_ROOT, 'manifest.json'), {
                rootAssetPath: paths.STATIC,
                extensionsRegex: /\.(jpe?g|png|gif|svg)$/,
                ignorePaths: ['/css', '/js']
            })
        ],
    });
};
