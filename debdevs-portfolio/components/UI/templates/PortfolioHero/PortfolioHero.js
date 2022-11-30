import React from 'react';
import styles from './PortfolioHero.module.css';
import IconWithToolTip from '../../atoms/IconWithToolTip/IconWithToolTip';
import skills from '../../../../public/data/skills.js';
import { motion } from 'framer-motion';
import PortfolioTabs from '../../molecules/PortfolioTabs/PortfolioTabs';
import ThemeButton3 from '../../atoms/ThemeButton3/ThemeButton3';
import { ThemeButton2 } from '../../atoms/ThemeButton2/ThemeButton2';


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
            <ThemeButton2 button_text='About Me' button_link='/about'/>
            <ThemeButton3 button_link='/about'/>

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
