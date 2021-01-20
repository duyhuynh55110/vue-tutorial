const path = require('path');
module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, 'src/'),
            "@store": path.resolve(__dirname, 'src/store/index'),

            "@blogSideBar": path.resolve(__dirname, 'src/modules/BlogSideBar/'),
            "@breadCumb": path.resolve(__dirname, 'src/modules/BreadCumb/'),
            "@categories": path.resolve(__dirname, 'src/modules/Categories/'),
            "@comments": path.resolve(__dirname, 'src/modules/Comments/'),
            "@instagram": path.resolve(__dirname, 'src/modules/Instagram/'),
            "@layouts": path.resolve(__dirname, 'src/modules/Layouts/'),
            "@posts": path.resolve(__dirname, 'src/modules/Posts/'),

          },
          extensions: ['*', '.js', '.vue', '.json']
        }
      }
};