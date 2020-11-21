module.exports = {
    devServer: {
        host: "localhost"
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/projects/pg22rrt/' : '/'
}