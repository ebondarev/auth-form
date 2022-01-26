import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Button } from "./";

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

it("textContent", () => {
  act(() => {
    render(<Button>Some text</Button>, container);
  });
  expect(container.querySelector("button").textContent).toBe("Some text");

  act(() => {
    render(<Button className="class-name"></Button>, container);
  });
  expect(
    container.querySelector("button").classList.contains("class-name")
  ).toBe(true);
});

it("className", () => {
  act(() => {
    render(<Button>Some text</Button>, container);
  });
  expect(container.querySelector("button").textContent).toBe("Some text");

  act(() => {
    render(<Button className="class-name"></Button>, container);
  });
  expect(
    container.querySelector("button").classList.contains("class-name")
  ).toBe(true);
});
