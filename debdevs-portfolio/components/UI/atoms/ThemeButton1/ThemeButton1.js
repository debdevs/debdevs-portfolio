import React from 'react';
import styles from './ThemeButton1.module.css';
import Link from 'next/link';
import { ProjectLanding } from '../../../../pages/projects';
export const ThemeButton1 = ({
  button_text = 'The Story',
  button_link = '/projects',
}) => {
  return (
    <div>
      <Link href={button_link}>
        <button className={styles.theme_button_1_bg}>
          <a></a>
          {button_text}
        </button>
      </Link>
    </div>
  );
};
