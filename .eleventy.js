module.exports = function(eleventyConfig) {

  eleventyConfig.addLayoutAlias('default', 'base.njk');

  return {
    dir: {
      input: "site",
      layouts: "_layouts",
      output: "dist"
    }
  };
};
