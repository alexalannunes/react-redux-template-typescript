import { configureStore } from "@reduxjs/toolkit";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import React, { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import counterSlice from "./features/counterSlice";
import { store } from "./store";

function render(
  ui: ReactElement,
  {
    preloadState = { value: 0 },
    store = configureStore({ reducer: { counter: counterSlice } }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
