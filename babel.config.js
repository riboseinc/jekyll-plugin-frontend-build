const presets = [
  "@babel/preset-react",
  [
    "@babel/env",
    {
      modules: "commonjs",
      targets: {
        ie: "10",
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
];

module.exports = { presets };