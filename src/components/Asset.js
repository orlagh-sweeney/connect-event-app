import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

/*
Code from Code Institute Moments walkthrough project
*/

const Asset = ({ spinner, src, message, width }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} width={width} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;