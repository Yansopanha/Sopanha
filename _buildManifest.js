self.__BUILD_MANIFEST = function(e) {
    return {
        __rewrites: {
            afterFiles: [],
            beforeFiles: [],
            fallback: []
        },
        "/": [e, "static/chunks/pages/index-fd8f81605c0ccb10.js"],
        "/_error": ["static/chunks/pages/_error-08a9db0f433628d8.js"],
        "/blog": [e, "static/chunks/pages/blog-b62f4b60007229e8.js"],
        sortedPages: ["/", "/_app", "/_error", "/blog"]
    }
}("static/chunks/49-2a588434a3a3e1f0.js"),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
