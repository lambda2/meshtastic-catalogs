import type { CatalogDefinition } from "./types";
import deepmerge from "deepmerge";

import catalogs from "./catalogs/index";
import { detailedDiff } from "deep-object-diff";

export const applyCatalog = (
	currentConfig: CatalogDefinition,
	catalogToApply: CatalogDefinition,
) => {
	return deepmerge<CatalogDefinition>(currentConfig, catalogToApply);
};

export const diffCatalog = (
	currentConfig: CatalogDefinition,
	catalogToCompare: CatalogDefinition,
) => {
	return detailedDiff(currentConfig, catalogToCompare);
};

export const getCatalogs = async () => {
	return catalogs;
};

export { catalogs };
