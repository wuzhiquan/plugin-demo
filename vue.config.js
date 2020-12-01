const fs = require("fs");
const path = require("path");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

const join = path.join;
function getEntries(path) {
  let files = fs.readdirSync(resolve(path));
  const entries = files.reduce((ret, item) => {
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory();
    if (isDir) {
      ret[item] = resolve(join(itemPath, 'index.js'))
    } else {
      const [name] = item.split('.')
      ret[name] = resolve(`${itemPath}`)
    }
    return ret
  }, {})
  return entries
}

// 运行示例配置
const exampleConfig = {
  publicPath: "./",
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .tap(() => {
        return { compilerOptions: { preserveWhitespace: false } };
      })
      .end()
      .use('md-loader')
      .loader(path.resolve(__dirname, './build/md-loader/index.js'))
      .end()
      .end()
  }
};

// 组件库打包配置
const libConfig = {
  outputDir: "lib",
  productionSourceMap: false,
  css: {
    sourceMap: true,
    extract: {
      filename: "style/[name].css"
    }
  },
  configureWebpack: {
    entry: {
      ...getEntries("packages")
    },
    output: {
      filename: "[name].js",
      libraryTarget: "commonjs2"
    }
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.optimization.delete("splitChunks");
    config.plugins.delete("copy");
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("hmr");
    config.entryPoints.delete("app");
  }
};

module.exports = process.env.NODE_ENV === "development" || process.env.BUILD_MODE === "example"
  ? exampleConfig
  : libConfig;
