import React from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';
const NavBar = () => {
  return (
    <div>
      {' '}
      <nav className={styles.nav_bar}>
        <nav_content className={styles.nav_content}>
          <Link href="/">
            <h1>D</h1>
          </Link>
        </nav_content>
      </nav>
    </div>
  );
};

export default NavBar;
