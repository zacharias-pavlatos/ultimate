export interface Intent {
  id: string;
  name: string;
  description: string;
  trainingData: {
    expressionCount: number;
    expressions: {
      id: string;
      text: string;
    }[];
  };
  reply: {
    id: string;
    text: string;
  };
}

export interface IntentContextState {
  intents: Intent[];
  selectedIntentsIds: string[];
}

export type ActionType =
  | { type: "SELECT_ALL_INTENTS" }
  | { type: "UNSELECT_ALL_INTENTS" }
  | { type: "ADD_OR_REMOVE_INTENT"; id: string };

export interface IntentContextType {
  intents: Intent[];
  selectedIntentsIds: string[];
  selectAll: () => void;
  unselectAll: () => void;
  handleIntentClick: (id: string) => void;
}
