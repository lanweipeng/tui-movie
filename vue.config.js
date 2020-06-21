module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    devServer: {
        // host:'172.16.16.39',
        proxy: {
            '/api': {
                target: 'http://app.naoffer.com',
                // target: 'http://rap2.taobao.org:38080/app/mock/257821',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}