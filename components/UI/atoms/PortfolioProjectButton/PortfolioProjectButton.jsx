import React from 'react';
import styles from './PortfolioProjectButton.module.css';
import Link from 'next/link';
const PortfolioProjectButton = ({
  button_text = 'My Work',
  button_link = '/',
}) => {
  return (
    <Link href={button_link}>
      <button className={styles.main_portfolio_button}>
        <a></a>
        <div className={styles.main_portfolio_button_overlay}>
          <h1 className={styles.main_portfolio_button_text}>{button_text}</h1>
        </div>
      </button>
    </Link>
  );
};

export default PortfolioProjectButton;
