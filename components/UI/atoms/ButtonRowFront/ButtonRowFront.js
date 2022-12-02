import React from 'react';
import styles from './ButtonRowFront.module.css';
export const ButtonRowFront = () => {
  return (
    <tabs className={styles.tabs}>
      <max_container className={styles.max_container}>
        <blue_bg className={styles.blue_bg}></blue_bg>
        <white_bg className={styles.white_bg}></white_bg>
        <button_parent className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Overview</h1>
            </div>
          </div>
        </button_parent>
      </max_container>

      <max_container className={styles.max_container}>
        <blue_bg className={styles.blue_bg}></blue_bg>
        <white_bg className={styles.white_bg}></white_bg>
        <button_parent className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Challenges</h1>
            </div>
          </div>
        </button_parent>
      </max_container>

      <max_container className={styles.max_container}>
        <blue_bg className={styles.blue_bg}></blue_bg>
        <white_bg className={styles.white_bg}></white_bg>
        <button_parent className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Github</h1>
            </div>
          </div>
        </button_parent>
      </max_container>

      <max_container className={styles.max_container}>
        <blue_bg className={styles.blue_bg}></blue_bg>
        <white_bg className={styles.white_bg}></white_bg>
        <button_parent className={styles.button_parent}>
          <div className={styles.rainbowGradient}>
            <div className={styles.innerSquare}>
              <h1 className={styles.h1}>Site</h1>
            </div>
          </div>
        </button_parent>
      </max_container>
    </tabs>
  );
};
