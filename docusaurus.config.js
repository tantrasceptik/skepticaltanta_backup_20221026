/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tantra between Skeptics - Touch experiments',
  tagline: 'Explore your touch with the help of Science and Skepticism',
  url: 'https://skeptical-tantra.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'Skeptical-Tantra', // Usually your GitHub org/user name.
  projectName: 'skeptical-tantra', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  themeConfig: {
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
          docId: 'must-read-for-spiritual-tantrikas',
          label: 'Must read for Spiritual Tantrikas',
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
          docId: 'what/what-is-skeptical-tantra',
          label: 'What is Skeptical Tantra ?',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'learning-paths/introduction',
          label: 'Learning paths',
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
        {
          title: 'English Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/skeptical.tantra',
            },
            {
              label: 'Facebook group',
              href: 'https://www.facebook.com/groups/curious.people.skeptical.tantra',
            },
          ],
        },
        {
          title: 'French Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/tantra.entre.sceptiques',
            },
            {
              label: 'Facebook group',
              href: 'https://www.facebook.com/groups/curieuses.et.curieux.du.tantra.entre.sceptiques',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/TantraSceptique',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'How to contribute ?',
              to: 'docs/what/contribute',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Skeptical-Tantra/skeptical-tantra',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
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
        gtag: {
          trackingID: 'G-LLQEBL65WS',
          anonymizeIP: false,
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
