'use strict';

module.exports = function(grunt) {

    return {
        tasks: {
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
                            // Configure proxy for

                            var proxyMiddleware = require(grunt.config.get('devtoolsPath') + '/node_modules/http-proxy-middleware');

                            // configure proxy middleware context
                            //var context = ['/cubx.core.rte@1.0.0/**', '/lodash-3.10.1@1.0.0/**',
                            // 'polymer-1.2.3@1.0.2/**'];  // requests with this path will be proxied

                            //var context = [
                            //    '/cubx.core.rte@1.0.0/**',
                            //    '/lodash-3.10.1@1.0.0/**',
                            //    '/lodash-3.10.1@0.1.0-SNAPSHOT/**',
                            //    '/polymer-1.2.3@1.0.2/**',
                            //    '/polymer-1.1.2@1.0.0/**',
                            //    '/polymer-1.1.2@0.1.0-SNAPSHOT/**'];  // requests
                            var context = ['**', '!/' + grunt.config.get('param.src') + '/**', '!/components/**'];
                            //var context = '/cubx.core.rte@1.0.0/**';
                            // with this
                            // path will
                            // be proxied

                            // configure proxy middleware options
                            var options = {
                                target: {// target host
                                    port: 443,
                                    host: 'webblebase.net'
                                },
                                changeOrigin: true,
                                pathRewrite: {
                                    '^../../../': '/'      // rewrite paths
                                },
                                proxyTable: {
                                    'localhost:2000': 'https://webblebase.net'
                                },
                                logLevel: 'debug'
                            };

                            // create the proxy
                            var proxy = proxyMiddleware(context, options);
                            wct.hook('prepare:webserver', function(app, done) {
                                app.use(proxy);
                                done();
                            });
                        }
                    }
                }
            }
        }
    };
};
