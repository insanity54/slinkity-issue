// .eleventy.js or eleventy.config.js
const slinkity = require('slinkity')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(slinkity.plugin, slinkity.defineConfig({

  }))

  return {
    templateFormats: [
      "njk"
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "_site"
    }
  }

}

