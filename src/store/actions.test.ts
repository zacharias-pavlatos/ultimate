/**
 * @file  Intents actions behavior test
 */

// Internal imports
import { intentsActions, IntentActions } from "./actions";
import { initialState } from "./context";

describe("Intents actions", () => {
  let actions: IntentActions;
  let dispatch: jest.Mock = jest.fn();

  beforeAll(() => {
    actions = intentsActions(initialState, dispatch);
  });

  afterEach(() => {
    dispatch.mockRestore();
  });

  it("Should be called with SELECT_ALL_INTENTS", () => {
    actions.selectAll();
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: "SELECT_ALL_INTENTS",
    });
  });

  it("Should be called with UNSELECT_ALL_INTENTS", () => {
    actions.unselectAll();
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: "UNSELECT_ALL_INTENTS",
    });
  });

  it("Should be called with ADD_OR_REMOVE_INTENT and an id", () => {
    actions.handleIntentClick("some_id");
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: "ADD_OR_REMOVE_INTENT",
      id: "some_id",
    });
  });
});
