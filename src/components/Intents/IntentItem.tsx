/**
 * @file  Implements the IntentItem Component
 */

//External imports
import classNames from "classnames";
import { CSSProperties, ReactElement } from "react";

// Internal imports
import { Intent } from "../../@types/intents";

// Styles imports
import styles from "./IntentItem.module.css";

// Types definition
export type IntentItemProps = {
  intent: Intent;
  isSelected: boolean;
  onClick: (id: string) => void;
  className?: string;
  style?: CSSProperties;
};

/**
 * Returns the IntentItem
 *
 * @param {Intent} intent           intend data
 * @param {string} onClick          Callback function
 * @param {boolean} isSelected      If the Intent item is selected
 * @param {string} [className]      The class name of the component
 * @param {CSSProperties} [style]   The inline style of the component
 *
 * @returns {ReactElement}          IntentItem react element.
 */

const IntentItem = ({
  intent,
  onClick,
  isSelected,
  className,
  style,
}: IntentItemProps): ReactElement => {
  return (
    <div
      className={classNames(
        styles.root,
        isSelected && styles.selected,
        className
      )}
      style={style}
      onClick={() => onClick(intent.id)}
      data-testid={isSelected ? "selected" : "unselected"}
    >
      <div className={styles.header}>
        <div className={styles.name}>{intent.name}</div>
        <div className={styles.description}>{intent.description}</div>
      </div>

      <div className={styles.expressionCont}>
        {intent.trainingData.expressions.map(({ id, text }) => (
          <div className={styles.expression} key={id}>
            {text}
          </div>
        ))}
      </div>
      <div className={styles.replyCont}>
        <div className={styles.reply}>{intent.reply.text}</div>
      </div>
    </div>
  );
};

export default IntentItem;
