const xmlFiltersPlugin = require("eleventy-xml-plugin");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid");
module.exports = function (eleventyConfig) {
  // Mermaid
  eleventyConfig.addPlugin(pluginMermaid);
  eleventyConfig.addPlugin(xmlFiltersPlugin);
  // RSS
  eleventyConfig.addPlugin(pluginRss);
  // Copy images across
  eleventyConfig.addPassthroughCopy("images");
  // Convert sass and copy across
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/css/**/*.css",
  });
  // Syntax Highlighting
  eleventyConfig.addPlugin(syntaxHighlight);
  return {
    dir: {
      output: "_site",
      layouts: "_layouts",
      input: ".",
    },
  };
};
