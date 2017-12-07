module.exports = {
    entry: ['whatwg-fetch',	'./js/zadanie01.jsx'],
    output: { filename: "./js/out.js" },
    watch: true,
    devServer:	{
        inline:	true,
        contentBase:	'./',
        port:	3004
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            }
        ]
    }
}