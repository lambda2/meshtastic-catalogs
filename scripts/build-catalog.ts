import {
  readdirSync,
  lstatSync,
  existsSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
} from "node:fs";
import type { CatalogDefinition, CatalogMetadata } from "../src/types";
import * as changeCase from "change-case";

import { fileURLToPath } from "node:url";

import path from "node:path";

const appDir = path.dirname("..");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CATALOGS_DIR = path.join(__dirname, "..", "catalogs");
const CATALOGS_OUT_DIR = path.join(__dirname, "..", "src", "catalogs");

function getCatalogs() {
  const catalogs = {} as { [key: string]: CatalogDefinition };

  readdirSync(CATALOGS_DIR).map(async (catName) => {
    const dirName = `${CATALOGS_DIR}/${catName}`;

    const dir = lstatSync(dirName);

    if (dir.isDirectory()) {
      readdirSync(dirName).map(async (fileName) => {
        console.log(`Processing ${dirName}/${fileName}...`);

        const rawCatalog = readFileSync(`${dirName}/${fileName}`, {
          encoding: "utf8",
        });
        const catalog = JSON.parse(rawCatalog) as CatalogDefinition;

        catalogs[`${catName}-${fileName.replace(".json", "")}`] = catalog;
      });
    }
  });

  return catalogs;
}

function indexFileForCatalogs(catalogs: { [key: string]: CatalogDefinition }) {
  const modules = Object.keys(catalogs)
    .flatMap((cat) => {
      const moduleName = changeCase.pascalCase(cat);
      const fileName = changeCase.camelCase(cat);

      return [
        `import { ${moduleName} } from "./${fileName}";`,
        `export { ${moduleName} };`,
        "",
      ];
    })
    .join("\n");
  const moduleList = [
    `export default [ ${Object.keys(catalogs)
      .map((e) => changeCase.pascalCase(e))
      .join(", ")} ];`,
  ].join("\n");

  return [modules, moduleList].join("\n");
}

function generateDefinitionForCatalog(
  name: string,
  catalog: CatalogDefinition,
) {
  const moduleName = changeCase.pascalCase(name);
  return [
    `import type { CatalogDefinition } from "../../src/types";`,
    `const ${moduleName}: CatalogDefinition = ${JSON.stringify(catalog, null, 2)};`,
    `export { ${moduleName} };`,
  ].join("\n");
}

function buildCatalogs() {
  if (!existsSync(CATALOGS_OUT_DIR)) {
    mkdirSync(CATALOGS_OUT_DIR);
  }

  const catalogs = getCatalogs();

  Object.keys(catalogs).map((catName) => {
    const catContent = generateDefinitionForCatalog(catName, catalogs[catName]);
    const fileName = changeCase.camelCase(catName);
    writeFileSync(`${CATALOGS_OUT_DIR}/${fileName}.ts`, catContent, {
      encoding: "utf8",
      flag: "w",
    });
  });

  const indexFile = indexFileForCatalogs(catalogs);
  writeFileSync(`${CATALOGS_OUT_DIR}/index.ts`, indexFile, {
    encoding: "utf8",
    flag: "w",
  });
}

buildCatalogs();
