import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import type { ConfigDefinition, ConfigMetadata } from "./types";

const appDir = dirname("..");

const CONFIGS_DIR = join(appDir, "configs");

const configs = {} as { [key: string]: ConfigDefinition };

readdirSync(CONFIGS_DIR).map(async (fileName) => {
  console.log(`Processing ${CONFIGS_DIR}/${fileName}...`);

  const meta = (await import(
    `${CONFIGS_DIR}/${fileName}/metadata.json`
  )) as ConfigMetadata;
  const config = (await import(
    `${CONFIGS_DIR}/${fileName}/config.json`
  )) as ConfigDefinition;

  console.log("Got: ", meta, config);

  configs[meta.name] = config;
});

export default configs;
