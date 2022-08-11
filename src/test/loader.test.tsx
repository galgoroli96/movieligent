import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Loader from "../components/Loader";

describe("Loader test", () => {
  it("Should render the Loader", () => {
    render(<Loader />);
    const loaderElement: HTMLElement = screen.getByTestId("loader");
    expect(loaderElement).toBeDefined();
  });
});
