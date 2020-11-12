module.exports = {
    devServer: {
        host: "localhost"
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/webtech-termproj-spacex/' : '/docs'
}