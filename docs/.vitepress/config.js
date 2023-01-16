export default {
    title: 'sodigfj',
    description: 'Just playing around.',
    themeConfig: {
        siteTitle: 'My Custom Title',
        logo: '/my-logo.svg',
        nav: [
            { text: 'Guide', link: '/guide' },
            { text: 'Configs', link: '/configs' },
          ],
        sidebar: [
        {
            text: 'Guide',
            items: [

                { text: 'Welcome', link: '/' },
                { text: 'From research to business', link: '/timelog/research-to-business' },
                { text: 'Why blockchain', link: '/timelog/why-blockchain' },
            ]
        }
        ]
    }
}