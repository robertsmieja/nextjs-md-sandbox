const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [],
    hastPlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],

  webpack(config, options) {
    return config
  },
})
