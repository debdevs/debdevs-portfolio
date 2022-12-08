import React from 'react';
import styles from './AlternateAboutHero.module.css';
import IconWithToolTip from '../../atoms/IconWithToolTip/IconWithToolTip';
import skills from '../../../../public/data/skills.js';
import Image from 'next/future/image';
import ThemeButton3 from '../../atoms/ThemeButton3/ThemeButton3';
import { ThemeButton2 } from '../../atoms/ThemeButton2/ThemeButton2';
import { useContext } from 'react';
import { HomeProjectDetailsContext } from '../../../../contexts/HomeProjectDetailsContext';
import data from '../../../../public/project_data';
import { motion, AnimatePresence } from 'framer-motion';
import { Context } from 'react';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

const AlternateAboutHero = ({image_source}) => {

  return (
    <section className={styles.alternate_about_header}>
      <div className={styles.content_box}>
        <div className={styles.left_items}>
          <div className={styles.header_info_box}>
            <h1 className={styles.h1}>About Me:</h1>
            <h2 className={styles.h2}>
              I'm a <span className={styles.span}>developer</span>
            </h2>
            <p className={styles.p}>
              With a passion for visuals and a drive to get it done
            </p>
            <div className={styles.line_div}></div>

            <p className={styles.details_paragraph}>
              
            With a passion for visuals and a drive to get it done

I'm passionate about creating engaging visual experiences, and translating designs into code.

Over the years, I've worked as an animator who's designed custom python scripts and business solutions for various companies.

I’ve also worked to create custom designs and more efficient workflows.

I’m currently looking to get practical experience while working towards a computer science degree.

Take a look at my previous work below
            </p>

          </div>
        </div>
  
      </div>

    </section>
  );
};

export default AlternateAboutHero;
