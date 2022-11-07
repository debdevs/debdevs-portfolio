import React from 'react';
import styles from './PortfolioHero.module.css';
import IconWithToolTip from '../../atoms/IconWithToolTip/IconWithToolTip';
import skills from '../../../../public/data/skills.js';
import { motion } from 'framer-motion';
import PortfolioTabs from '../../molecules/PortfolioTabs/PortfolioTabs';

const PortfolioHero = () => {
  return (
    <section className={styles.portfolio_header}>
      <content_box className={styles.content_box}>
        <left_items className={styles.left_items}>
          <portfolio_header_info_box
            className={styles.portfolio_header_info_box}
          >
            <h1 className={styles.h1}>Welcome</h1>
            <h2 className={styles.h2}>
              To my <span className={styles.span}>Portfolio</span>
            </h2>
            <p className={styles.p}>
              From web designs to visuals, I’ve got projects
            </p>
            <line_div className={styles.line_div}></line_div>
            <button_array className={styles.button_array}>
              <button className={styles.blue_button}>About</button>
              <button className={styles.white_button}>
                <div className={styles.white_inner_button}>My Work</div>
              </button>
            </button_array>
            <tabs_array className={styles.tabs_array}>
              <PortfolioTabs />
            </tabs_array>
          </portfolio_header_info_box>
        </left_items>
      </content_box>
    </section>
  );
};

export default PortfolioHero;
