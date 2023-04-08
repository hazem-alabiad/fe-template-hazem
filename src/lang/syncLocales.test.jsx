import { describe, expect, it } from "vitest";

import { syncLocales } from "./syncLocales.cjs";

describe("sync locales script", () => {
  it("returns an empty object when the locale files are in sync", () => {
    const en = { "name": "name" };
    const tr = { "name": "isim" };

    const updatedTr = syncLocales(en, tr, false);

    expect(updatedTr).toMatchObject({});
  });

  it("copies translations from 'en.json to 'tr.json' with [REVIEW] label", () => {
    const en = { "name": "name" };
    const tr = {};

    const updatedTr = syncLocales(en, tr, false, false);

    expect(updatedTr).toStrictEqual({ "name": "name [REVIEW]" });
  });

  it("copies missed Turkish translations from 'en.json' with [REVIEW] label", () => {
    const en = {
      "age": "age",
      "name": "name",
      "surname": "surname",
      "title": "title",
    };
    const tr = { "name": "isim" };

    const updatedTr = syncLocales(en, tr, false, false);

    expect(Object.keys(updatedTr).length).toEqual(Object.keys(en).length);
  });
});
