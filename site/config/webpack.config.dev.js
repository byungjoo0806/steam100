const fallback = {
  "path": require.resolve("path-browserify"),
  // 다른 폴리필 설정도 필요한 경우 여기에 추가할 수 있습니다.
};

// ...

module.exports = {
  // ...

  resolve: {
    fallback,
  },

  // ...
};
