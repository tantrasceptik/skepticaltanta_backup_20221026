/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Skeptical Tantra & Sexuality',
  tagline: 'Explore your sexuality with the help of Science and Skeptical Tantra',
  url: 'https://skeptical-tantra.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'Skeptical-Tantra', // Usually your GitHub org/user name.
  projectName: 'skeptical-tantra', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-LLQEBL65WS',
      // Champs facultatifs.
      anonymizeIP: true, // Les IP doivent-elles être anonymisées ?
    },
    navbar: {
      title: 'Skeptical Tantra & Sexuality',
      logo: {
        alt: 'Skeptical Tantra Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'must-read-for-neo-tantrikas',
          label: 'Must read for Neo-Tantrikas',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'ethical/code-of-conduct',
          label: 'Ethical rules / Code of Conduct',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'what/what-is-tantra',
          label: 'What is Skeptical Tantra ?',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'why/links-with-science',
          label: 'Why do Skeptical Tantra ?',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'practice/presentation',
          label: 'Practical guide',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'neo-tantra-companions/main',
          label: 'Neo-Tantra and ...',
        },
        // {
        //   to: 'docs/what',
        //   activeBasePath: 'docs/what',
        //   label: 'What is Tantra Sceptic ?',
        //   position: 'left',
        // },
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/Skeptical-Tantra/skeptical-tantra',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Getting Started',
        //       to: 'docs/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Facebook',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Skeptical-Tantra/skeptical-tantra',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skeptical Tantra. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Skeptical-Tantra/skeptical-tantra/tree/main',
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Skeptical-Tantra/skeptical-tantra/tree/main/blog',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      fr: {
        label: 'Français',
      },
    },
  },
};
