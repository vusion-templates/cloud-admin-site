module.exports = {
    repo: 'vusion/cloud-admin',
    base: '/cloud-admin-site/',
    title: 'Cloud Admin',
    description: 'Cloud Admin 是网易云计算前端团队推出的一套开箱即用的中台前端解决方案',
    themeConfig: {
        nav: [
            {
                text: '功能',
                items: [
                    {
                      text: 'Component',
                      textES: 'Componente',
                      textZH: '组件',
                      items: [
                        {
                          text: '富文本编辑器',
                          link: '/feature/component/rich-editor.md'
                        },
                        {
                          text: 'Markdown 编辑器',
                          link: '/feature/component/markdown-editor.md'
                        },
                        {
                          text: '代码编辑器',
                          link: '/feature/component/code-editor.md'
                        },
                        {
                          text: 'Pagination 分页',
                          link: '/feature/component/pagination.md'
                        }
                      ]
                    }
                  ],
            },
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
                '/guide/essentials/develop.md',
                '/guide/essentials/build.md',
                '/guide/essentials/suggest.md',
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
                '/guide/advanced/template.md',
            ],
        },],
    },
};
