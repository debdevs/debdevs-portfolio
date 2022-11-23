import React from 'react';
import styles from './AboutHero.module.css';
import IconWithToolTip from '../../atoms/IconWithToolTip/IconWithToolTip';
import skills from '../../../../public/data/skills.js';
import { motion } from 'framer-motion';
import PortfolioTabs from '../../molecules/PortfolioTabs/PortfolioTabs';


const AboutHero = () => {
  return (
    <section className={styles.about_header}>
      <content_box className={styles.content_box}>
        
        <left_items className={styles.left_items}>
          <about_header_info_box
            className={styles.about_header_info_box}
          >
            <h1 className={styles.h1}>About Me</h1>
            <h2 className={styles.h2}>
              I'm a <span className={styles.span}>Developer</span>
            </h2>
            <p className={styles.p}>
              I'm a web developer who's passionate about creating engaging visual experiences, and translating designs into code. <br></br> <br></br> Over the years, I've worked as an animator who's designed custom python scripts and business solutions for various companies
            </p>
            <line_div className={styles.line_div}></line_div>
            <button_array className={styles.button_array}>
             

            </button_array>
            <tabs_array className={styles.tabs_array}>
             
            </tabs_array>
          </about_header_info_box>
        </left_items>
      </content_box>
    </section>
  );
};

export default AboutHero;
