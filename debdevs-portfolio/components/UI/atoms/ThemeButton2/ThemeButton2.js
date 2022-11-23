import React from 'react';
import styles from './ThemeButton2.module.css';
export const ThemeButton2 = ({ button_text = 'Next', click_function}) => {
  return (
    <div>
      <button onClick={click_function} className={styles.theme_button_2_bg}>{button_text}</button>
    </div>
  );
};
