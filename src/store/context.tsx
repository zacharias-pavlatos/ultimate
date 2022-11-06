/**
 * @file Intents Context
 *
 */

// External Imports
import React, { createContext, useReducer, useContext } from "react";

// Internal imports
import data from "./intents.json";
import { intentsReducer } from "./reducers";
import { IntentContextState, ActionType } from "./types";
import { intentsActions, IntentActions } from "./actions";

type IntentsContextProps = {
  state: IntentContextState;
  dispatch: React.Dispatch<ActionType>;
  actions: IntentActions;
};

const initialState: IntentContextState = {
  intents: data,
  selectedIntentsIds: [],
};

//--- Context
export const IntentsContext = createContext<IntentsContextProps | null>(null);

//--- Provider
const IntentsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(intentsReducer, initialState);
  const actions = intentsActions(state, dispatch);

  return (
    <IntentsContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </IntentsContext.Provider>
  );
};

//--- Hook
const useIntents = () => {
  const context = useContext(IntentsContext);
  if (!context)
    throw new Error("IntentsContext must be called from within its Provider");

  const { intents, selectedIntentsIds } = context.state;
  const { selectAll, unselectAll, handleIntentClick } = context.actions;
  return {
    intents,
    selectedIntentsIds,
    selectAll,
    unselectAll,
    handleIntentClick,
  };
};

export { IntentsProvider, initialState };
export default useIntents;
