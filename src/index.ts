// biome-ignore lint/style/useExportType: <explanation>
import * as Types from "./types";
import deepmerge from "deepmerge";

import catalogs from "./catalogs/index";
import { detailedDiff } from "deep-object-diff";

// biome-ignore lint/style/useExportType: <explanation>
export { Types };

export const applyCatalog = (
  currentConfig: Types.CatalogDefinition,
  catalogToApply: Types.CatalogDefinition,
) => {
  return deepmerge<Types.CatalogDefinition>(currentConfig, catalogToApply);
};

export const diffCatalog = (
  currentConfig: Types.CatalogDefinition,
  catalogToCompare: Types.CatalogDefinition,
) => {
  return detailedDiff(currentConfig, catalogToCompare);
};

export const getCatalogList = () => {
  return Object.values(catalogs);
};

export const getCatalog = (id: string) => {
  return getCatalogList().find((c) => c?.id === id);
};

export { catalogs };
