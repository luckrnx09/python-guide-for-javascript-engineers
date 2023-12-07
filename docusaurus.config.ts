/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JavaScript 工程师的 Python 指南',
  tagline: 'Python, JavaScript, 编程, 经验, 教程, 开源, 免费, 电子书, 下载, PDF, 示例',
  url: 'https://luckrnx09.github.io',
  baseUrl: '/python-guide-for-javascript-engineers/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  projectName: 'python-guide-for-javascript-engineers',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          editUrl: 'https://github.com/luckrnx09/python-guide-for-javascript-engineers/edit/main/',
          routeBasePath: '/',
          path: './docs',
          editLocalizedFiles: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        }
      }),
    ],
  ],

  themeConfig: (
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        title: 'JavaScript 工程师的 Python 指南',
        items: [
          {
            label:'Github',
            position: 'right',
            href:'https://github.com/luckrnx09/python-guide-for-javascript-engineers'
          },
        ],
        logo: {
          alt: 'JavaScript 工程师的 Python 指南',
          href: '/',
          src: './img/favicon.ico'
        },
      },
      metadata: [
        { name: 'keywords', content: 'Python, JavaScript, 编程, 经验, 教程, 开源, 免费, 电子书, 下载, PDF, 示例' },
        { name: 'description', content: '《JavaScript 工程师的 Python 指南》，是一本的开源电子书，囊括从 Python 环境安装到项目开发所需要的各种知识。本书通过案例对比 JavaScript 和 Python 的异同，帮助 JavaScript 工程师快速掌握 Python 语言。' },
        { name: 'author', content: 'luckrnx09' },
      ],
    }
  ),
  plugins: [
    function (context, options) {
      return {
        name: 'baidu-plugin',
        injectHtmlTags({ content }) {
          return {
            postBodyTags: [`
            <script type="text/javascript">
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "k0fttuea53");
        </script>
            `],
          };
        },
      };
    },
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["zh"],
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
    localeConfigs: {
      'zh-cn': {
        label: '中文',
        direction: 'ltr',
      },
    },
  },
};

module.exports = config;
