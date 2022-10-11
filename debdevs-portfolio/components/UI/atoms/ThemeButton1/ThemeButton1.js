import React from 'react';
import styles from './ThemeButton1.module.css';
import Link from 'next/link';
import { ProjectLanding } from '../../../../pages/projects';
export const ThemeButton1 = () => {
  return (
    <div>
      <Link href="/projects">
        <button className={styles.theme_button_1_bg}>
          <a></a>
          The Story
        </button>
      </Link>
    </div>
  );
};
