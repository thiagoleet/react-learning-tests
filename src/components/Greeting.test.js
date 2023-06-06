import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

const texts = {
  HELLO_WORD: "Hello World!",
  CHANGED_TEXT: "Changed",
  NOT_CHANGED_TEXT: "It's good to see you!",
};

describe("Greeting.js", () => {
  test("renders 'Hello World' as a test", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText(texts.HELLO_WORD);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see' you if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText(texts.NOT_CHANGED_TEXT, {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText(texts.CHANGED_TEXT);
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText(texts.NOT_CHANGED_TEXT, {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
