module.exports = {
  dest: './dist',    // 设置输出目录
  base: '/blog/', // 设置站点根路径
  title: 'wdss博客',
  description: 'wdss blog',
  home: true,
  themeConfig: {
    nav: getNavConfig(),
    sidebar: getSidebarConfig()
  }
}
/** 导航栏目录 */
function getNavConfig () {
  return [
    {text: '首页', link: '/'},
    { text: '前端之路', link: '/fe/' },
    { text: '算法和AI', link: '/ai/' },
    { text: '全栈工程师', link: '/full/' },
    { text: '个人简历', link: 'https://qweewq123.github.io/resume/' },
    { text: 'github', link: 'https://github.com/qweewq123' }
  ]
}
/** 侧边栏目录 */
function getSidebarConfig () {
  return {
    // 前端之路
    '/fe/': [
      {
        title: 'html',
        collapsable: false,
        children: [
          '页面重绘和回流以及优化',
          '如何计算白屏和首屏时间'
        ]
      },
      {
        title: 'css',
        collapsable: false,
        children: [
          'flex',
          'FC'
        ]
      },
      {
        title: 'js',
        collapsable: false,
        children: [
          'set',
          '前端模块化',
          'arguments',
          '防抖和节流',
          'promise',
          'setTimeout妙用',
          '深入理解javascript中的原型',
          '前端新视野--WebGL'
        ]
      },
      {
        title: 'vue',
        collapsable: false,
        children: [
          '使用nuxt的ssr渲染',
          'vue学习watch的高级用法',
          '渲染函数',
          'vue生命周期',
          'vue-router'
        ]
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          'hack',
          'web安全'
        ]
      },
    ],
    // 算法和AI
    '/ai/': [
      {
        title: 'ai',
        collapsable: false
      }
    ],
    // 全栈工程师
    '/full/': [
      {
        title: 'nodejs相关',
        collapsable: false,
        children: [
          'nodejs问题处理',
          'nodejs文件目录'   
        ]
      },
      {
        title: '服务器相关',
        collapsable: false,
        children: [
          '跳板机'
        ]
      }
    ]
  }
}