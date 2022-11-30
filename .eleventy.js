const xmlFiltersPlugin = require("eleventy-xml-plugin");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid");
const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  // Mermaid
  eleventyConfig.addPlugin(pluginMermaid);
  eleventyConfig.addPlugin(xmlFiltersPlugin);
  // RSS
  eleventyConfig.addPlugin(pluginRss);
  // Copy images across
  eleventyConfig.addPassthroughCopy("images");
  // Favicon
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  // Syntax Highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // SASS Plugin for 11ty
  eleventyConfig.addPlugin(eleventySass);
  return {
    dir: {
      output: "_site",
      layouts: "_layouts",
      input: ".",
    },
  };
};
