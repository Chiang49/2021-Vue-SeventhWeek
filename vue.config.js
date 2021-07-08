module.exports = {
    transpileDependencies: ['@vue/reactivity'],

    publicPath: process.env.NODE_ENV === 'production'
    ? '/2021-Vue-SeventhWeek/'
    : '/'
}

