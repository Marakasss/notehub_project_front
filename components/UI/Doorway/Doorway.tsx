"use client";
import styles from "./Doorway.module.css";

const Doorway = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.doorFrame}>
        <div className={styles.doorway}>
          <div className={styles.steps}></div>
          <div className={styles.planet}></div>
          <div className={styles.stars}></div>
        </div>
      </div>
    </div>
  );
};

export default Doorway;
