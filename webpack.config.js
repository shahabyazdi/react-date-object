const path = require("path")

module.exports = {
    entry: [
        "./index.js"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "react-date-object",
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node-modules/,
            loader: "babel-loader",
            query: {
                presets: ["@babel/preset-env", {
                    'plugins': ['@babel/plugin-proposal-class-properties']
                }]
            }
        }]
    },
    mode: "production"
}