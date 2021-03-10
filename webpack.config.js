const path = require("path");

//webpack設定
module.exports = {
    //要被轉譯成js的jsx位置
    entry: {
        main : './src/jsx/main.jsx',
    },
    output: {
        path: path.resolve(__dirname, './public/js'), //編譯後js的位置
        filename: '[name].js'
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