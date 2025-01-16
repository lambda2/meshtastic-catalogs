import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/catalogs/index.ts"],
  noExternal: ["@buf/meshtastic_protobufs.bufbuild_es"],
  format: "esm",
  sourcemap: true,
  clean: true,
  dts: true,
});
