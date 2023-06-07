import { render, screen } from "@testing-library/react";
import Async from "./Async";

const DUMMY_DATA = [{ id: "p1", title: "first post" }];

describe("Async.js", () => {
  test("renders posts if request succeeds", async () => {
    // overwriting fetch method
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => DUMMY_DATA,
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
