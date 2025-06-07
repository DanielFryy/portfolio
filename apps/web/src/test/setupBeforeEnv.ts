import { cleanup } from "@testing-library/react";

afterEach(cleanup);

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => ({
    toString: () => ""
  })
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}));
