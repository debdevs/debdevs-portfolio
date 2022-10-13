import styles from './HomeTabs.module.css';
import React from 'react';
import { useState } from 'react';
const options = ['Overview', 'Challenges', 'Github', 'Site'];

const HomeTabs = () => {
  const [active, setActive] = useState(options[0]);
  const [count, setCount] = useState(0);
  const [clickedId, setClickedId] = useState(-1);
  const clickStyles = {
    h1_color: 'rgba(191, 209, 217, 1)',
    RainbowGradient_background_color: 'white',
    RainbowGradient_transform: 'translateY(5px)',
  };
  return (
    <tabs className={styles.tabs}>
      {options.map((option, i) => (
        <button
          className={styles.max_container}
          onClick={() => setClickedId(i)}
        >
          <blue_bg className={styles.blue_bg}></blue_bg>
          <white_bg className={styles.white_bg}></white_bg>
          <button_parent className={styles.button_parent}>
            <div
              className={
                i === clickedId
                  ? styles.active_rainbowGradient
                  : styles.rainbowGradient
              }
            >
              <div
                key={i}
                className={
                  i === clickedId ? styles.active_text : styles.innerSquare
                }
              >
                <h1>{option}</h1>
              </div>
            </div>
          </button_parent>
        </button>
      ))}
    </tabs>
  );
};

export default HomeTabs;
