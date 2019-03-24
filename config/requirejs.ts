requirejs.config({
    baseUrl: "../dist/",
    // module name mapped to CDN url
    paths: {
        // Require.js appends `.js` extension for you
        'react': 'node_modules/react/index',
        'react-dom': 'node_modules/react_dom/index'
    }
});

