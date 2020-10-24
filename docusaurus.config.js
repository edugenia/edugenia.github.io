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
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        // {to: 'apps', label: 'Apps', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Organization',
          items: [
            {
              label: 'About us',
              to: 'docs/aboutus/'
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
              to: 'docs/privacy/'
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
