import React from "react";
import styles from "./Switch.module.css";

function Switch({ checked = false, onToggle = () => {}, ...rest }) {
  return (
    <>
      <input
        checked={checked}
        onChange={onToggle}
        type="checkbox"
        id={"toggle"}
        className={styles.toggle}
      />
      <label htmlFor="toggle"></label>
    </>
  );
}

export default Switch;
