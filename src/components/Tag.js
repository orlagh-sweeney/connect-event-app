// react imports
import React from "react";

// style imports
import styles from "../styles/Tag.module.css";

// tag component to disply text
const Tag = ({ text }) => {
  return <div className={`${styles.Type}`}>{text}</div>;
};

export default Tag;
