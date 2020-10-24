module.exports = {
  title: 'Edugenia',
  tagline: 'Smart educational software',
  url: 'https://www.edugenia.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'edugenia', // Usually your GitHub org/user name.
  projectName: 'edugenia.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Edugenia',
      logo: {
        alt: 'Edugenia logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/tests',
          activeBasePath: 'docs',
          label: 'Products & Services',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products & Services',
          items: [
            {
              label: 'Educational tests',
              to: 'docs/tests/',
            },
            {
              label: 'Engish verbs app',
              to: 'docs/irregular/',
            },
          ],
        },
        {
          title: 'Organization',
          items: [
            {
              label: 'About us',
              to: 'aboutus/'
            },
            {
              label: 'Contact Edugenia',
              href: 'mailto:info@edugenia.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Privacy',
              to: 'privacy/'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Edugenia.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
