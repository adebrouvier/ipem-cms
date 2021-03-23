const pluginSass = require("eleventy-plugin-sass");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(pluginSass, {
    watch: ['_scss/**/*.{scss,sass}'],
    outputDir: 'css'
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addLayoutAlias('default', '../_layouts/default.html');
  eleventyConfig.addLayoutAlias('posts', '../_layouts/posts.html');
  eleventyConfig.addLayoutAlias('landing-page', '../_layouts/landing-page.html');

  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('uploads');
  eleventyConfig.addPassthroughCopy('css');

  return {
    dir: {
      input: "./",
      output: "./_site",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
      passthroughFileCopy: true
    }
  };
};
