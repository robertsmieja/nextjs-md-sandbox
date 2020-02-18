// mdx remark plugins
const codeScreenshot = require("remark-code-screenshot")
const images = require("remark-images")
const toc = require("remark-toc")

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)?$/,
  options: {
    remarkPlugins: [
      //codeScreenshot,
      images,
      toc,
    ],
  },
  // options: {
  // remarkPlugins: [],
  // rehypePlugins: [],
  // },
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // webpack(config, options) {
  // return config
  // },
})
