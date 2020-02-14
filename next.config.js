const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)?$/,
  // options: {
  // mdPlugins: [],
  // hastPlugins: [],
  // },
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // webpack(config, options) {
  // return config
  // },
})
