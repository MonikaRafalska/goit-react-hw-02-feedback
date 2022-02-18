import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button onClick={options} className={styles.button}>{onLeaveFeedback}</button>
    </>
  );
};
export default FeedbackOptions;