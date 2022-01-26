import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { InputPassword } from './';

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
    render(<InputPassword />, container);
  });
  expect(container.querySelector("input").type).toBe("password");
});
