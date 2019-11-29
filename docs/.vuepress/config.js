module.exports = {
  base: '/page/',
  title: 'AllenBblog', 
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: 'HTML/CSS/JS',
        items: [
          { text: 'HTML/HTML5', link: '/html/' },
          { text: 'CSS/CSS3', link: '/css/' },
          { text: 'JS/ES/TS', link: '/js/' },
        ]
      },
      {
        text: '框架',
        items: [
          { text: 'Vue', link: '/vue/' },
          { text: 'React', link: '/react/' },
          { text: 'Flutter', link: '/flutter/' },
          { text: '小程序', link: '/wx/' },
        ]
      },
      {
        text: '网络基础',
        items: [
          { text: 'HTTP', link: '/http/' },
          // { text: 'WebSocket', link: '/WebSocket/' },
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'node', link: '/node/' },
          { text: 'mongoDB', link: '/mongoDB/' },
          { text: 'nginx', link: '/nginx/' },
        ]
      },
      {
        text: '前端工具',
        items: [
          { text: 'git', link: '/git/' },
        ]
      },
    ],
    sidebar: {
      '/html/': [
        ['', 'HTML/HTML5'],
      ],
      '/css/': [
        ['', 'CSS/CSS3'],
      ],
      '/js/': [
        ['', 'JS/ES/TS'],
      ],
      '/vue/': [
        ['', 'Vue'],
      ],
      '/react/': [
        ['', 'React'],
      ],
      '/flutter/': [
        ['', 'Flutter'],
      ],
      '/wx/': [
        ['', '小程序'],
      ],
      '/http/': [
        ['', 'http'],
      ],
      '/node/': [
        ['', 'node'],
      ],
      '/mongoDB/': [
        ['', 'mongoDB'],
      ],
      '/nginx/': [
        ['', 'nginx'],
      ],
      '/git/': [
        ['', 'git'],
      ],
      // fallback
      '/': [
        '',        /* / */
        // 'contact', /* /contact.html */
        // 'about'    /* /about.html */
      ]
    },
  }
}