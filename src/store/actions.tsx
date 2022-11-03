/**
 * @file  Intents actions file
 *
 */

// Internal imports
import { IntentContextState, ActionType } from "./types";

export type IntentActions = {
  selectAll: () => void;
  unselectAll: () => void;
  handleIntentClick: (id: string) => void;
};

export const intentsActions = (
  state: IntentContextState,
  dispatch: React.Dispatch<ActionType>
): IntentActions => {
  /**
   * Selects all the intents
   *
   * @return {void}
   */
  const selectAll = (): void => {
    dispatch({ type: "SELECT_ALL_INTENTS" });
  };

  /**
   * Unselects all the intents
   *
   * @return {void}
   */
  const unselectAll = (): void => {
    dispatch({ type: "UNSELECT_ALL_INTENTS" });
  };

  /**
   * Unselects all the intents
   *
   * @param {string} id The id of the intent
   *
   * @return {void}
   */
  const handleIntentClick = (id: string): void => {
    dispatch({ type: "ADD_OR_REMOVE_INTENT", id });
  };

  return {
    selectAll,
    unselectAll,
    handleIntentClick,
  };
};
