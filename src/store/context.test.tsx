/**
 * @file  Intents context behavior test
 */

import { render } from "@testing-library/react";

// Internal imports
import useIntents, { IntentsProvider } from "./context";

const TestComponent = () => {
  useIntents();
  return <></>;
};

describe("Test context", () => {
  it("Should throw error when not wrapped inside `IntentProvider`", () => {
    //Warning suppressor due to https://github.com/facebook/react/issues/11098
    const spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrowError(
      "IntentsContext must be called from within its Provider"
    );

    spy.mockRestore();
  });

  it("Should not throw error when  wrapped inside `IntentProvider`", () => {
    expect(() =>
      render(
        <IntentsProvider>
          <TestComponent />
        </IntentsProvider>
      )
    ).not.toThrowError(
      "IntentsContext must be called from within its Provider"
    );
  });
});
