import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config: Config = {
  title: "Boa JS",
  tagline: "An ECMAScript engine written in Rust",
  favicon: "img/new_logo_yellow.svg",

  // Set the production url of your site here
  url: "https://boajs.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "boa-dev",
  projectName: "boa-dev.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/boa-dev/boa-dev.github.io/tree/main/docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        pages: {},
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    // Replace with your project's social card
    image: "img/new_logo_yellow.svg",
    navbar: {
      title: "Boa",
      logo: {
        alt: "My Site Logo",
        src: "img/new_logo_blue.svg",
        srcDark: "img/new_logo_yellow.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "infoSidebar",
          position: "left",
          label: "Learn More",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/about", label: "About", position: "left" },
        {
          href: "/playground",
          label: "Playground",
          position: "right",
        },
        {
          href: "/conformance",
          label: "Conformance",
          position: "right",
        },
        {
          href: "https://boajs.dev/boa/dev/bench/",
          label: "Benchmarks",
          position: "right",
        },
        {
          href: "https://docs.rs/boa_engine/latest",
          label: "API Docs",
          position: "right",
        },
        {
          href: "https://github.com/boa-dev/boa",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    // TODO: Configure footer for Boa socials
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "About",
              to: "/about",
            },
            {
              label: "Learn More",
              to: "/docs/intro",
            },
            {
              label: "Release API",
              href: "https://docs.rs/boa_engine/latest",
            },
            {
              label: "Development API",
              href: "https://boajs.dev/boa/doc/boa_engine/index.html",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/tUFFk9Y",
            },
            {
              label: "Mastodon",
              href: "https://fosstodon.org/@boa_engine",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "RSS",
              href: "https://boajs.dev/blog/rss.xml",
            },
            {
              label: "GitHub",
              href: "https://github.com/boa-dev/boa",
            },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["rust", "toml"],
    },
    mermaid: {
      theme: { light: 'dark', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    function custom() {
      return {
        name: "custom-docusaurus-plugin",
        configureWebpack() {
          return {
            experiments: {
              asyncWebAssembly: true,
            },
          };
        },
      };
    },
    [
      "./plugins/blog-plugin",
      {
        sortPosts: "descending",
        postsPerPage: "ALL",
        blogSidebarCount: "ALL",
        showReadingTime: true,
        feedOptions: {
          type: "all",
          createFeedItems: async (params) => {
            const { blogPosts, defaultCreateFeedItems, ...rest } = params;
            return defaultCreateFeedItems({
              // keep only the 10 most recent blog posts in the feed
              blogPosts: blogPosts.filter((item, index) => index < 10),
              ...rest,
            });
          },
        },
      },
    ],
    // This is a fix for the flashing 404 page on URLs with a trailing slash:
    //
    // See: https://github.com/facebook/docusaurus/issues/5077
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects(existingPath: string) {
          if (!existingPath.endsWith("/")) {
            return `${existingPath}/`;
          }

          // Return a falsy value: no redirect created
          return undefined;
        },
      },
    ]
  ],
};

export default config;
