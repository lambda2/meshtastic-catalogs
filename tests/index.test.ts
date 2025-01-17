import {
  applyCatalog,
  catalogs,
  getCatalog,
  getCatalogList,
} from "../src/index";

describe("#applyCatalog", () => {
  test("can apply empty config", () => {
    const initial = { id: "empty", metadata: { name: "empty" } };
    const toApply = catalogs.DefaultSimple_868;
    const final = applyCatalog(initial, toApply);
    expect(final).toMatchObject(toApply);
  });
});

describe("#getCatalogs", () => {
  test("can get catalogs list", async () => {
    const allCatalogs = await getCatalogList();

    expect(allCatalogs.length).toBeGreaterThan(0);
    expect(Object.keys(catalogs).length).toBeGreaterThan(0);
    expect(catalogs.DefaultSimple_868).not.toBeNull();
    expect(catalogs.DefaultSimple_868.metadata.name).not.toBeNull();
  });
});
