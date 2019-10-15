module.exports = {
    repo: 'vusion/cloud-admin',
    base: '/cloud-admin-site/',
    title: 'Cloud Admin',
    description: 'Cloud Admin 是网易云计算前端团队推出的一套开箱即用的中台前端解决方案',
    themeConfig: {
        nav: [
            {
                text: 'Github',
                link: 'https://github.com/vusion/cloud-admin'
              },
        ],
        sidebar: [{
            title: '基础',
            collapsable: false,
            children: [
                '/guide/',
                '/guide/essentials/layout.md',
                '/guide/essentials/style.md',
                '/guide/essentials/title.md',
                '/guide/essentials/router.md',
                '/guide/essentials/nav.md',
                '/guide/essentials/new.md',
                '/guide/essentials/service.md',
                '/guide/essentials/mock.md',
                '/guide/essentials/scripts.md',
                '/guide/essentials/build.md',
            ],
        }, {
            title: '进阶',
            collapsable: false,
            children: [
                '/guide/advanced/icons.md',
                '/guide/advanced/i18n.md',
                '/guide/advanced/chart.md',
                '/guide/advanced/themes.md',
                '/guide/advanced/eslint.md',
                '/guide/advanced/test.md',
                '/guide/advanced/git-hooks.md',
            ],
        },],
    },
};
