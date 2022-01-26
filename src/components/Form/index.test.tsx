import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Form } from "./";
import { Button } from "../Button";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("className", () => {
  act(() => {
    render(
      <Form fields={[]} legend="Legend" className="test-class-name" />,
      container
    );
  });
  expect(
    container.querySelector("form").classList.contains("test-class-name")
  ).toBe(true);
});

it("fieldset", () => {
  act(() => {
    render(<Form fields={[]} legend="Legend" />, container);
  });
  expect(container.querySelectorAll("fieldset")).toHaveLength(1);
});

it("legend", () => {
  act(() => {
    render(<Form fields={[]} legend="Legend" />, container);
  });
  expect(container.querySelector("legend").textContent).toBe("Legend");

  act(() => {
    render(<Form fields={[]} legend="Legend 1" />, container);
  });
  expect(container.querySelector("legend").textContent).toBe("Legend 1");
});

it("ul", () => {
  act(() => {
    render(<Form fields={[]} legend="Legend" />, container);
  });
  expect(container.querySelectorAll("ul")).toHaveLength(1);
});

it("li", () => {
  act(() => {
    render(<Form fields={[]} legend="Legend" />, container);
  });
  expect(container.querySelectorAll("form li")).toHaveLength(0);

  act(() => {
    render(<Form fields={[<Button></Button>]} legend="Legend" />, container);
  });
  expect(container.querySelectorAll("form li")).toHaveLength(1);

  act(() => {
    render(
      <Form fields={[<Button></Button>, <Button></Button>]} legend="Legend" />,
      container
    );
  });
  expect(container.querySelectorAll("form li")).toHaveLength(2);
});
