/**
 * @file Intent item definition file
 */

//Internal imports
import useIntents from "../../store/context";
import IntentItem from "./IntentItem";

// Styles imports
import styles from "./Intents.module.css";

const Intents = () => {
  const {
    intents,
    selectedIntentsIds,
    selectAll,
    unselectAll,
    handleIntentClick,
  } = useIntents();

  return (
    <>
      <div>
        <h2>Please choose the intents to be included in the chat bot.</h2>
      </div>
      <p>
        Help the chat bot to understand how it should act based on users
        behaver.
      </p>

      <div className={styles.header}>
        <div>
          <button
            className={styles.button}
            onClick={selectAll}
            disabled={selectedIntentsIds.length === intents.length}
          >
            SelectAll
          </button>
          <button
            className={styles.button}
            onClick={unselectAll}
            disabled={selectedIntentsIds.length === 0}
          >
            DeselectAll
          </button>
        </div>
        <div>Selected: {selectedIntentsIds.length}</div>
      </div>

      <div className={styles.root}>
        {intents.map((intent) => (
          <IntentItem
            key={intent.id}
            intent={intent}
            onClick={handleIntentClick}
            isSelected={selectedIntentsIds.includes(intent.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Intents;
