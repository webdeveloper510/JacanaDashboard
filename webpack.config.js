module.exports = {
  // Other webpack configuration options...
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
    },
  },
};
