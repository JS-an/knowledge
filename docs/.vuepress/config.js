module.exports = {
  title: 'AllenBblog', 
  // description: 'AllenBlog',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    // displayAllHeaders: true,
    nav: [
      { text: 'HTML/HTML5', link: '/html/' },
      { text: 'CSS/CSS3', link: '/css/' },
      { text: 'JS/ES', link: '/js/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'React', link: '/react/' },
      { text: 'Flutter', link: '/flutter/' },
      { text: '小程序', link: '/wx/' }
    ],
    // sidebar: [
    //   ['/html/', 'HTML/HTML5'],
    //   ['/css/', 'CSS/CSS3'],
    //   ['/js/', 'JS/ES'],
    //   ['/vue/', 'Vue'],
    //   ['/react/', 'React'],
    //   ['/flutter/', 'Flutter'],
    //   ['/wx/', '小程序']
    // ],
    sidebar: {
      '/html/': [
        ['', 'HTML/HTML5'],
      ],
      '/css/': [
        ['', 'CSS/CSS3'],
      ],
      '/js/': [
        ['', 'JS/ES'],
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
      // fallback
      '/': [
        '',        /* / */
        // 'contact', /* /contact.html */
        // 'about'    /* /about.html */
      ]
    },
  }
}