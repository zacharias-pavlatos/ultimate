// Internal imports
import Intents from "./components/Intents";
import { IntentsProvider } from "./store/context";

// Styles imports
import "./App.css";

function App() {
  return (
    <IntentsProvider>
      <div className="App">
        <div>Utimate.ai</div>
        <Intents />
      </div>
    </IntentsProvider>
  );
}

export default App;
