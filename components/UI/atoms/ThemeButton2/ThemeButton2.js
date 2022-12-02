import React from 'react';
import styles from './ThemeButton2.module.css';
import Link from 'next/link';
export const ThemeButton2 = ({ button_text = 'Next', click_function, button_link = '#'}) => {
  return (
    <Link href = {button_link}>
      <button  onClick={click_function} className={styles.theme_button_2_bg}>{button_text}</button>
      </Link>
  );
};
