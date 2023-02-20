export default {
    title: 'Aurora',
    description: 'Just playing around.',
    themeConfig: {
        siteTitle: 'Aurora Guide',
        logo: '/my-logo.svg',
        nav: [
            { text: '', link: '/guide' },
            { text: 'Configs', link: '/configs' },
          ],
        sidebar: [
        {
            text: 'Timelog',
            items: [
                { text: '🤗 Welcome', link: '/' },
                {
                    text: "⏲️ Timelog",
                    items: [
                        { text: 'Research -> Business', link: '/timelog/research-to-business' },
                        { text: 'Sex Toys?', link: '/timelog/why-sex-toys' },
                        { text: 'My time at i-Tech', link: '/timelog/i-tech.md' },
                        { text: 'Blockchain?', link: '/timelog/why-blockchain' },
                        { text: 'Visions for the future', link: '/timelog/visions-for-the-future' },
                    ],
                },
                { text: 'Proof of Work', link: '/proof-of-work' },

            ]
        }
        ]
    }
}