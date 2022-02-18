import React from "react";
import styles from "./Statistics.module.css";

const Statistics = ({good, neutral, bad, total, positivePercentage,}) => {
  return (
    <ul className={styles.list}>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {total}</li>
      <li>positive feedback: {positivePercentage}%</li>
    </ul>
  );
};
export default Statistics;
