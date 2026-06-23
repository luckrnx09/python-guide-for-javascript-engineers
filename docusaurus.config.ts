import type { Config} from '@docusaurus/types'
import type { Options } from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Python Guide for JavaScript Engineers',
  tagline: 'A free open-source eBook helping JavaScript developers master Python through practical code comparisons',
  url: 'https://luckrnx09.com',
  baseUrl: '/python-guide-for-javascript-engineers/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  projectName: 'python-guide-for-javascript-engineers',

  // Custom fields (non-standard Docusaurus config)
  customFields: {
    image: 'img/book_cover.png',
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          path: './docs',
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          sidebarCollapsed: false,
          editUrl: 'https://github.com/luckrnx09/python-guide-for-javascript-engineers/edit/main/',
          editLocalizedFiles: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          lastmod: 'date',
        }
      }) as Options,
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
        title: 'Python Guide for JavaScript Engineers',
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            label:'GitHub',
            position: 'right',
            href:'https://github.com/luckrnx09/python-guide-for-javascript-engineers'
          },
        ],
        logo: {
          alt: 'Python Guide for JavaScript Engineers',
          href: '/',
          src: './img/favicon.ico'
        },
      },
      metadata: [
        { name: 'keywords', content: 'Python, JavaScript, programming, tutorial, open source, ebook, learn Python, JS to Python' },
        { name: 'description', content: 'A free open-source eBook that helps JavaScript engineers quickly master Python through side-by-side code comparisons, practical examples, and hands-on projects.' },
        { name: 'author', content: 'luckrnx09' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { property: 'og:image', content: 'https://luckrnx09.com/python-guide-for-javascript-engineers/img/book_cover.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://luckrnx09.com/python-guide-for-javascript-engineers/img/book_cover.png' },
      ],
    }
  ),
  plugins: [
    // Structured data (JSON-LD) plugin
    function structuredDataPlugin(_context: any, _options: any) {
      return {
        name: 'structured-data-plugin',
        injectHtmlTags({ content }: any) {
          const isZhCN = content?.permalink?.startsWith('/zh-cn/');
          const jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'Book',
            'name': isZhCN
              ? 'Python 指南 for JavaScript 工程师'
              : 'Python Guide for JavaScript Engineers',
            'description': isZhCN
              ? '一本免费的开源电子书，通过代码对比、实用示例和动手项目，帮助 JavaScript 工程师快速掌握 Python 语言。'
              : 'A free open-source eBook that helps JavaScript engineers quickly master Python through side-by-side code comparisons, practical examples, and hands-on projects.',
            'author': {
              '@type': 'Person',
              'name': 'luckrnx09',
              'url': 'https://github.com/luckrnx09',
            },
            'url': 'https://luckrnx09.com/python-guide-for-javascript-engineers/',
            'image': 'https://luckrnx09.com/python-guide-for-javascript-engineers/img/book_cover.png',
            'inLanguage': isZhCN ? 'zh-CN' : 'en',
            'license': 'https://opensource.org/licenses/MIT',
          };
          return {
            headTags: `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
          };
        },
      };
    },
    // Microsoft Clarity analytics
    function (_context: any, _options: any) {
      return {
        name: 'clarity-plugin',
        injectHtmlTags() {
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
        language: ["en", "zh"],
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },
};

module.exports = config;
