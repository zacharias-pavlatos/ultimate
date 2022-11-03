/**
 * @file  Intents reducer behavior test
 */

// Internal imports
import { initialState as state } from "./context";
import { intentsReducer } from "./reducers";
import { ActionType } from "./types";

describe("Test intentReducer", () => {
  it("Should be able to select all the intents", () => {
    const action: ActionType = {
      type: "SELECT_ALL_INTENTS",
    };

    const updatedState = intentsReducer(state, action);
    // Expecting all the intents to be selected
    expect(updatedState).toEqual({
      ...state,
      selectedIntentsIds: state.intents.map((intent) => intent.id),
    });
  });

  it("Should be able to unselect all the intents", () => {
    const action: ActionType = {
      type: "UNSELECT_ALL_INTENTS",
    };

    const updatedState = intentsReducer(
      {
        ...state,
        // All the intents are added (selected)
        selectedIntentsIds: state.intents.map((intent) => intent.id),
      },
      action
    );
    // Expecting no intents to be selected
    expect(updatedState).toEqual({
      ...state,
      selectedIntentsIds: [],
    });
  });

  it("Should add/remove an intent", () => {
    const action: ActionType = {
      type: "ADD_OR_REMOVE_INTENT",
      id: "a_new_id",
    };
    // Adds it if id doesn't exists
    const updatedState = intentsReducer(state, action);
    expect(updatedState).toEqual({
      ...state,
      selectedIntentsIds: ["a_new_id"],
    });
    // Get removed if id dose exists
    const updatedState2 = intentsReducer(updatedState, action);
    expect(updatedState2).toEqual(state);
  });

  it("Should return the current state when the action with no specific type is dispatched", () => {
    const action: ActionType = {
      // @ts-ignore: Unreachable code error
      type: "undefined",
    };
    const updatedState = intentsReducer(state, action);
    expect(updatedState).toEqual(state);
  });
});
