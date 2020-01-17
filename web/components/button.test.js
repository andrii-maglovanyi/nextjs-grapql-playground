import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./button.tsx";

afterEach(cleanup);

describe("Button", () => {
  it("should capture clicks", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click Me</Button>);
    const node = getByText("Click Me");

    expect(onClick).not.toHaveBeenCalled();
    expect(node).not.toHaveAttribute("type");
    expect(node).not.toHaveAttribute("aria-busy");
    fireEvent.click(node);
    expect(onClick).toHaveBeenCalled();
  });

  it("should not capture clicks if disabled", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button disabled onClick={onClick}>
        I am disabled
      </Button>
    );

    expect(onClick).not.toHaveBeenCalled();
    const node = getByText("I am disabled");
    expect(node).toBeDisabled();
    expect(node).not.toHaveAttribute("type");
    expect(node).not.toHaveAttribute("aria-busy");
    fireEvent.click(node);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should define a button type", () => {
    const { getByText } = render(
      <Button type="reset">I am a submit button</Button>
    );

    const node = getByText("I am a submit button");
    expect(node.getAttribute("type")).toBe("reset");
  });
});
