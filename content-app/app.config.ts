export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'shlyah-docs-nuxt',
      description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
    },
    theme: {
      customizable: true,
      color: 'blue',
      radius: 0.5,
    },
    header: {
      title: 'shlyah-docs-starter',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: 'logo.svg',
        dark: 'dark-theme-logo.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/LiliaBilous/shlyah-doc',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/LiliaBilous/shlyah-doc',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/LiliaBilous/shlyah-doc',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});