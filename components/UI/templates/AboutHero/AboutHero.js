import React from 'react';
import styles from './AboutHero.module.css';
import IconWithToolTip from '../../atoms/IconWithToolTip/IconWithToolTip';
import skills from '../../../../public/data/skills.js';
import { motion } from 'framer-motion';
import PortfolioTabs from '../../molecules/PortfolioTabs/PortfolioTabs';


const AboutHero = () => {
  return (
    <section className={styles.about_header}>
      
        
     
          <div
            className={styles.about_header_info_box}
          >
            <div className={styles.top_texts}>
            <h1 className={styles.h1}>About Me:</h1>
            <h2 className={styles.h2}>
              I'm a <span className={styles.span}>developer</span>
            </h2></div>
            <p className={styles.p_header}>
            With a passion for visuals and a drive to get it done


            </p>
            <div className={styles.line_div}></div>
            <p className={styles.p}>
              I'm passionate about creating engaging visual experiences, and translating designs into code. 
              <br></br> 
              <br></br> 
              Over the years, I've worked as an animator who's designed custom python scripts and business solutions for various companies.  <br></br> <br></br> 

I’ve also worked to create custom designs and more efficient workflows. <br></br> <br></br> 

I’m currently looking to get practical experience while working towards a computer science degree.<br></br> <br></br> 

Take a look at my previous work below

            </p>
   
  
          </div>
     
    
    </section>
  );
};

export default AboutHero;
