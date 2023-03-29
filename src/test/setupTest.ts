import "@testing-library/jest-dom";
import "@testing-library/react";

let mockLocaleStorage: Record<string, string> = {};

beforeAll(() => {
  // mocking localStorage
  global.Storage.prototype.setItem = vi.fn((key, value) => {
    mockLocaleStorage[key] = value;
  });

  global.Storage.prototype.getItem = vi.fn((key) => mockLocaleStorage[key]);

  global.Storage.prototype.clear = vi.fn(() => {
    mockLocaleStorage = {};
  });
});

beforeEach(() => {
  global.Storage.prototype.clear();
});

afterAll(() => {
  global.Storage.prototype.clear();
});
