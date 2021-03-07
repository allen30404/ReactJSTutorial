const path = require("path");

//webpack設定
module.exports = {
    entry: './jsx/main.jsx',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'main.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }

                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}