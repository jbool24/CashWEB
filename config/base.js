const path    = require('path');

// Constant with our paths
const paths = {
    PROJECT_ROOT: path.resolve(__dirname, '../'),
    SRC:          path.resolve(__dirname, '../cashweb/client/src/'),
    STATIC:       path.resolve(__dirname, '../cashweb/client/static/'),
    HTML:         path.resolve(__dirname, '../cashweb/client/templates/')
};

exports.paths = paths;

exports.getBaseConfig = () => {
    return {
        context: paths.SRC,
        resolve: {
            extensions: ['.sass','.scss', '.less', '.js', '.json'],
            modules: [paths.SRC, 'node_modules'],
        },
        node: {
            dgram: 'empty',
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
            child_process: 'empty',
        }
    };
};
