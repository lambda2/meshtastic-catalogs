import type { CatalogDefinition } from "./types";
import deepmerge from "deepmerge";

export const applyCatalog = (
	currentConfig: CatalogDefinition,
	catalogToApply: CatalogDefinition,
) => {
	return deepmerge<CatalogDefinition>(currentConfig, catalogToApply);
};

export const getCatalogs = async () => {
	const data = await import("./catalogs/index");
	console.log(data);

	return data;
};
