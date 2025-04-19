module.exports = {
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios)"
    ],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
  };
  