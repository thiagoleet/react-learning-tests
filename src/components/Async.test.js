import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async.js", () => {
  test("renders posts if request succeeds", async () => {
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
