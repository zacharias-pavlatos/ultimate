/**
 * @file    Intents behavior test
 */

// External Imports
import { fireEvent, render, screen } from "@testing-library/react";

// Internal Imports
import Intents from "./Intents";
import { IntentsProvider } from "../../store/context";

describe("Intents", () => {
  it("Renders learn react link", () => {
    render(
      <IntentsProvider>
        <Intents />
      </IntentsProvider>
    );
    expect(
      screen.getByText(
        "Please choose the intents to be included in the chat bot."
      )
    ).toBeInTheDocument();
  });

  it("Renders the selectAll button", () => {
    render(
      <IntentsProvider>
        <Intents />
      </IntentsProvider>
    );
    // Expecting SelectAll button to be in the document
    expect(
      screen.getByRole("button", { name: "SelectAll" })
    ).toBeInTheDocument();
  });

  it("Renders the deselectAll button", () => {
    render(
      <IntentsProvider>
        <Intents />
      </IntentsProvider>
    );
    // Expecting DeselectAll button to be in the document
    expect(
      screen.getByRole("button", { name: "DeselectAll" })
    ).toBeInTheDocument();
  });

  it("Should initiate with all item unselected", () => {
    render(
      <IntentsProvider>
        <Intents />
      </IntentsProvider>
    );
    // Expecting no selected elements at the init
    expect(screen.queryAllByTestId("selected")).toHaveLength(0);
  });

  it("Should be able to select all items", () => {
    render(
      <IntentsProvider>
        <Intents />
      </IntentsProvider>
    );
    // Amount of elements (unselected)
    const amountOfElements = screen.queryAllByTestId("unselected").length;
    // Click the SelectAll button
    fireEvent.click(screen.getByRole("button", { name: "SelectAll" }));
    // Expecting the amount of selected elements to be equal to the number of elements
    expect(screen.queryAllByTestId("selected")).toHaveLength(amountOfElements);
  });

  it("Should be able to unselect all items", () => {
    render(
      <IntentsProvider>
        <Intents />
      </IntentsProvider>
    );
    const amountOfElements = screen.queryAllByTestId("unselected").length;
    // Click the SelectAll button
    fireEvent.click(screen.getByRole("button", { name: "SelectAll" }));
    // Expecting the amount of selected elements to be equal to the amount of elements
    expect(screen.queryAllByTestId("selected")).toHaveLength(amountOfElements);

    // Click the DeselectAll button
    fireEvent.click(screen.getByRole("button", { name: "DeselectAll" }));
    // Expecting no selected items
    expect(screen.queryAllByTestId("selected")).toHaveLength(0);
  });

  it("Should be able to select one item", () => {
    render(
      <IntentsProvider>
        <Intents />
      </IntentsProvider>
    );
    const initialUnselectedElements = screen.queryAllByTestId("unselected");
    // Select the first unselected element
    fireEvent.click(initialUnselectedElements[0]);
    // Expecting the amount of unselected elements to be less than the initial
    expect(screen.queryAllByTestId("unselected").length).toBeLessThan(
      initialUnselectedElements.length
    );
  });

  it("Should be able to unselect one item", () => {
    render(
      <IntentsProvider>
        <Intents />
      </IntentsProvider>
    );
    const initialUnselectedElements = screen.queryAllByTestId("unselected");
    // Select the first unselected element
    fireEvent.click(initialUnselectedElements[0]);
    // Expecting the amount of unselected elements to be less
    expect(screen.queryAllByTestId("unselected").length).toBeLessThan(
      initialUnselectedElements.length
    );
    // Clicking again the same item in order to unselect it
    fireEvent.click(initialUnselectedElements[0]);
    // Expecting the amount of unselected elements to be the same as the init state
    expect(screen.queryAllByTestId("unselected").length).toEqual(
      initialUnselectedElements.length
    );
  });
});
