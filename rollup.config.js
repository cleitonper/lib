const commonjs = require("@rollup/plugin-commonjs").default;
const resolve = require("@rollup/plugin-node-resolve").default;
const typescript = require("@rollup/plugin-typescript").default;

const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    cache: false,
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig-package.json",
        outputToFilesystem: true,
      }),
    ],
    external: [
      "react",
      "react-dom",
      'react/jsx-runtime',
      '@mui/material'
    ],
  },
];
