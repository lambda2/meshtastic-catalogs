import { applyCatalog, getCatalogs } from "../src/index";

import * as Catalogs from "../src/catalogs";

describe("#applyCatalog", () => {
	test("can apply empty config", () => {
		const initial = { metadata: { name: "empty" } };
		const toApply = Catalogs.DefaultSimple_868;
		const final = applyCatalog(initial, toApply);
		expect(final).toMatchObject(toApply);
	});
});

describe("#getCatalogs", () => {
	test("can get catalogs list", async () => {
		const catalogs = await getCatalogs();

		expect(catalogs.default.length).toBeGreaterThan(0);
		expect(catalogs.DefaultSimple_868).not.toBeNull();
		expect(catalogs.DefaultSimple_868.metadata.name).not.toBeNull();
	});
});
