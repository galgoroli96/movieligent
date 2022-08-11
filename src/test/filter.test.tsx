import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterInput from "../components/FilterInput";

describe("Test when the user write into a search field", () => {
  test("Type into filter", async () => {
    const handleSearch = vi.fn();
    const handleKeyDown = vi.fn();
    render(
      <FilterInput handleKeyDown={handleKeyDown} handleSearch={handleSearch} />
    );
    const input: HTMLInputElement = screen.getByRole("searchbox");
    await userEvent.type(input, "Spiderman");
    expect(input.value).toBe("Spiderman");
  });
});
