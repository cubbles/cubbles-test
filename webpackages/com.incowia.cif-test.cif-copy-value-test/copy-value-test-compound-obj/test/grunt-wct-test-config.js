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

                            var proxyMiddleware = require(grunt.config.get('devtoolsPath') +
                                '/node_modules/http-proxy-middleware');

                            // configure proxy middleware context

                            // with this paths will be proxied
                            var context = ['**', '!/' + grunt.config.get('param.src') + '/**', '!/components/**'];

                            var remoteStoreUrl = grunt.config.get('workspaceConfig.remoteStoreUrl');
                            // configure proxy middleware options
                            var options = {
                                target: {// target host
                                    port: 443,
                                    host: 'webblebase.net'
                                },
                                proxyTable: {
                                    'localhost:2000': remoteStoreUrl
                                },
                                logLevel: 'error'
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
