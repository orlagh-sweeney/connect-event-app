import React from "react";
import styles from "../styles/Tag.module.css";

const Tag = ( {text} ) => {
  return (
    <div className={`${styles.Type}`}>
        {text}
    </div>
  )
};

export default Tag;