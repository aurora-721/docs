export default {
    title: 'sodigfj',
    description: 'Just playing around.',
    themeConfig: {
        siteTitle: 'My Custom Title',
        logo: '/my-logo.svg',
        nav: [
            { text: 'Guide', link: '/guide' },
            { text: 'Configs', link: '/configs' },
            { text: 'Changelog', link: 'https://github.com/...' }
          ],
        sidebar: [
        {
            text: 'Guide',
            items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Getting Started', link: '/getting-started' },
            ]
        }
        ]
    }
}