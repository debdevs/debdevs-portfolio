import React from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';
import ThemeButton3 from '../../atoms/ThemeButton3/ThemeButton3';
import ThemeButton4 from '@components/UI/atoms/ThemeButton4/ThemeButton4';

const NavBar = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    console.log("click")
    fetch('../DeborahDanielsResume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'DeborahDanielsResume.pdf';
            alink.click();
        })
    })
}

  return (
    <div className={styles.nav_parent}>
      {' '}
      <nav className={styles.nav_bar}>
        <div className={styles.nav_content}>
          <Link href="/">
            <h1 className={styles.logo_letter}>D</h1>
          </Link>
          <div className={styles.button_row}>
          <ThemeButton3 button_text="Resume" button_function = {()=>{onButtonClick()}}/>
          <ThemeButton4 button_text="Contact" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
