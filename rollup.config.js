import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import fs from "fs";
import { terser } from "rollup-plugin-terser";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default [
  {
    input: "./node_modules/date-object/dist/cjs/date-object.es6.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        plugins: [
          getBabelOutputPlugin({
            presets: [
              "@babel/preset-env",
              { plugins: ["@babel/plugin-proposal-class-properties"] },
            ],
          }),
          terser(),
        ],
        exports: "named",
      },
      {
        file: "dist/index.module.js",
        format: "es",
        plugins: [
          getBabelOutputPlugin({
            presets: [
              "@babel/preset-env",
              { plugins: ["@babel/plugin-proposal-class-properties"] },
            ],
          }),
          terser(),
        ],
        exports: "named",
      },
    ],
    plugins: [resolve(), commonjs()],
  },
  ...build("calendars"),
  ...build("locales"),
];

function build(path) {
  const nodePath = `./node_modules/date-object/${path}`;
  const array = fs
    .readdirSync(`${nodePath}/cjs`)
    .filter((file) => file.endsWith(".js"))
    .map((file) => file.replace(/\.js$/, ""));

  return array.map((name) => ({
    input: `${nodePath}/cjs/${name}.js`,
    output: [
      {
        file: `${path}/${name}.js`,
        format: "cjs",
        exports: "default",
        plugins: [terser()],
      },
    ],
    plugins: [commonjs()],
  }));
}
