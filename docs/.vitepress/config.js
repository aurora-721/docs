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
                    text: "Changelog",
                    items: [
                     { text: "v0.0.1", link: "/item-1" },
                     { text: "v0.0.2", link: "/item-2" },
                     { text: "v0.0.3", link: "/item-3" },
                    ],
                },
                { text: 'From research to business', link: '/timelog/research-to-business' },
                { text: 'Why sex toys', link: '/timelog/why-sex-toys' },
                { text: 'My time at Instrumentation Technologies', link: '/timelog/i-tech.md' },
                { text: 'Why blockchain', link: '/timelog/why-blockchain' },
                { text: 'Visions for the future', link: '/timelog/visions-for-the-future' },
            ]
        }
        ]
    }
}