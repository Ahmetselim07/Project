const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "jsx", "js", "ts", "tsx"],
      extraNodeModules: {
        "card-validator": require.resolve("card-validator"),
      },
    },
  };
})();
