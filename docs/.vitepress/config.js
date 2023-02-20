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
                { text: 'Welcome', link: '/' },
                {
                    text: "Timelog ⏲️ ",
                    items: [
                        { text: 'From research to business', link: '/timelog/research-to-business' },
                        { text: 'Why sex toys', link: '/timelog/why-sex-toys' },
                        { text: 'My time at Instrumentation Technologies', link: '/timelog/i-tech.md' },
                        { text: 'Why blockchain', link: '/timelog/why-blockchain' },
                        { text: 'Visions for the future', link: '/timelog/visions-for-the-future' },
                    ],
                },
            ]
        }
        ]
    }
}