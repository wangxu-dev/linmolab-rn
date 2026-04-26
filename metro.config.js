const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// SVG 支持
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
config.resolver.sourceExts = config.resolver.sourceExts || [];
config.resolver.sourceExts.push("svg");
config.resolver.sourceExts.push("sql");

// 路径别名 @ 指向根目录
config.resolver.alias = {
  ...config.resolver.alias,
  "@": path.resolve(__dirname),
};

module.exports = config;
