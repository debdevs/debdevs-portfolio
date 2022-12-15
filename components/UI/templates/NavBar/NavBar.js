import React from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';
import ThemeButton3 from '../../atoms/ThemeButton3/ThemeButton3';
import ThemeButton4 from '@components/UI/atoms/ThemeButton4/ThemeButton4';
const NavBar = () => {
  return (
    <div className={styles.nav_parent}>
      {' '}
      <nav className={styles.nav_bar}>
        <div className={styles.nav_content}>
          <Link href="/">
            <h1 className={styles.logo_letter}>D</h1>
          </Link>
          <div className={styles.button_row}>
          <ThemeButton3 button_text="Resume" />
          <ThemeButton4 button_text="Contact" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
