/**
 * @file  Intents reducer file
 */

// Internal imports
import { IntentContextState, ActionType } from "./types";

const intentsReducer = (
  state: IntentContextState,
  action: ActionType
): IntentContextState => {
  switch (action.type) {
    case "SELECT_ALL_INTENTS":
      return {
        ...state,
        selectedIntentsIds: state.intents.map((intent) => intent.id),
      };
    case "UNSELECT_ALL_INTENTS":
      return {
        ...state,
        selectedIntentsIds: [],
      };
    case "ADD_OR_REMOVE_INTENT":
      return {
        ...state,
        selectedIntentsIds: state.selectedIntentsIds.includes(action.id)
          ? state.selectedIntentsIds.filter(
              (selectedId: string) => selectedId !== action.id
            )
          : [...state.selectedIntentsIds, action.id],
      };
    default:
      return state;
  }
};

export { intentsReducer };
