import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/catalogs/index.ts"],
  format: ["esm", "cjs"],
  target: "es2015",
  sourcemap: true,
  clean: true,
  dts: true,
});
