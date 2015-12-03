'use strict';
// Configure proxy for
var proxyMiddleware = require('http-proxy-middleware');

// configure proxy middleware context
var context = '/cubx.core.rte*';      // requests with this path will be proxied

// configure proxy middleware options
var options = {
    target: {// target host
        port: 443,
        host: 'webblebase.net'
    },
    changeOrigin: true,
    pathRewrite: {
        '../../../': '/'      // rewrite paths
    },
    proxyTable: {
        'localhost:2000': 'https://webblebase.net'
    }
};

// create the proxy
var proxy = proxyMiddleware(context, options);

module.exports.tasks = {
    'wct-test': {
        'copy-value-test-compound-obj': {
            options: {
                verbose: true,
                root: '<%= workspacePath %>/<%= activeWebpackage %>/copy-value-test-compound-obj',
                remote: false,
                plugins: {
                    local: {
                        browsers: ['chrome'],
                        options: {remote: false}
                    }
                },
                registerHooks: function(wct) {
                    wct.hook('prepare:webserver', function(app, done) {
                        app.use(proxy);
                        done();
                    });
                }
            }
        }
    }
};
