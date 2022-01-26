import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { InputField } from './';

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

it("template", () => {
  act(() => {
    render(<InputField />, container);
  });
  expect(container.querySelectorAll("label > input, label > span")).toHaveLength(2);

  act(() => {
    render(<InputField>Children</InputField>, container);
  });
  expect(container.querySelector("label").textContent).toMatch('Children');
});
