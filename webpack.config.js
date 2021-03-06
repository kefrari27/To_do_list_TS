const path = require('path');

module.exports = {
    mode: "development",
    entry: path.join(__dirname, '/src/ts/main.ts'),
    output: {
      path: path.resolve(__dirname, './build'),
      filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};