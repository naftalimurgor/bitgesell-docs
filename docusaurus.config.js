// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bitgesell developer docs',
  tagline: 'This documentation is designed to help you build with Bitgesell. It covers Bitgesell as a concept, explains the Bitgesell tech stack, and documents getting started with Bitgesell.',
  favicon: 'img/bgl-logo.svg',

  // Set the production url of your site here
  url: 'https://bitgesell-docs.netlify.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'naftalimurgor', // Usually your GitHub org/user name.
  projectName: 'bitgesell-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/naftalimurgor/bitgesell-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Bitgesell Docs',
        logo: {
          alt: 'Bitgesell logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Getting started',
          },
          { href: 'https://bitgesell.dev', label: 'Bitgesell', position: 'right' },
          { href: 'https://app.bglwallet.io', label: 'Official Wallet', position: 'right' },
          { href: 'https://manager.daolens.com/app/dao/Bitgesell/1374/overview', label: 'DAO', position: 'right' },
          { href: 'https://discord.com/channels/745922397349347418/786136696088428574', label: 'Community', position: 'right' },

          {
            href: 'https://github.com/BitgesellOfficial/bitgesell',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/wallets',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Bitgesell',
                href: 'https://bitgesell.ca/',
              },
              {
                label: 'Official Wallet',
                href: 'https://app.bglwallet.io',
              },
              {
                label: 'DAO',
                href: 'https://manager.daolens.com/app/dao/Bitgesell/1374/overview',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'Donate to support',
            items: [
              {
                label: 'USDT (Ethereum): 0xe8931e29af87d9c65476aba80cff2e8d074c95ed',
                href: 'https://etherscan.io/address/0xe8931e29af87d9c65476aba80cff2e8d074c95ed',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bitgesell.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
