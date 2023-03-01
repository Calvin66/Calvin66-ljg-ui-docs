module.exports = {
  title: 'L-UI',
  base: '/',
  description: 'Just playing around',
  themeConfig: {
    //导航
    nav: [
      { text: '首页1', link: '/' },
      { text: '指南', link: '/componentDocs/' },
      { text: '更新日志', link: '/update/index' },
      { text: 'GitHub', link: 'https://www.npmjs.com/package/ljg-ui' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/ljg-ui' },
    ],
    sidebar: {
      '/componentDocs/': [
        {
          title: '简介',
          path: '/componentDocs/'
        },
        {
          title: '快速开始',
          path: '/componentDocs/start'
        },
        {
          title: '按钮',
          path: '/componentDocs/button'
        }
      ]
    }



  }
}
