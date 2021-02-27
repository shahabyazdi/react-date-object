import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"
import { getBabelOutputPlugin } from "@rollup/plugin-babel"

export default {
  input: "index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      plugins: [
        getBabelOutputPlugin({
          presets: [
            "@babel/preset-env",
            { "plugins": ["@babel/plugin-proposal-class-properties"] }
          ]
        }),
        terser()
      ],
      exports: "named"
    },
    {
      file: "dist/index.js",
      format: "es",
      plugins: [
        getBabelOutputPlugin({
          presets: [
            "@babel/preset-env",
            { "plugins": ["@babel/plugin-proposal-class-properties"] }
          ]
        }),
        terser()
      ],
      exports: "named"
    }
  ],
  plugins: [
    resolve(),
    commonjs()
  ]
}
