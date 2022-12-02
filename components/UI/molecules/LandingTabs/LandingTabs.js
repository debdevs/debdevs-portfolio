import LandingToggleButton from '../../atoms/LandingToggleButton/LandingToggleButton';
import styles from './LandingTabs.module.css';
import React from 'react';
import { useState } from 'react';
const options = ['Overview', 'Challenges', 'Github', 'Site'];

const LandingTabs = () => {
  const [active, setActive] = useState(options[0]);
  const [count, setCount] = useState(0);
  const [clickedId, setClickedId] = useState(-1);
  const clickStyles = {
    h1_color: 'rgba(191, 209, 217, 1)',
    RainbowGradient_background_color: 'white',
    RainbowGradient_transform: 'translateY(5px)',
  };
  return (
    <div className={styles.tabs}>
      {options.map((option, i) => (
        <div
          className={styles.max_container}
          onClick={() => setClickedId(i)}
          key={i}
        >
          <div className={styles.blue_bg}></div>
          <div className={styles.white_bg}></div>
          <div className={styles.button_parent}>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingTabs;
