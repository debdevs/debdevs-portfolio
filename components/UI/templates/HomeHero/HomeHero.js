import React from 'react';
import styles from './HomeHero.module.css';
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

const HomeHero = ({image_source}) => {
  const { heroProjectId, setHeroProjectId } = useContext(
    HomeProjectDetailsContext
  );
  return (
    <section className={styles.home_header}>
      <div className={styles.content_box}>
        <div className={styles.left_items}>
          <div className={styles.header_info_box}>
            <h1 className={styles.h1}>Hello There,</h1>
            <h2 className={styles.h2}>
              I'm <span className={styles.span}>Deborah</span>
            </h2>
            <p className={styles.p}>
              A frontend developer with a passion for visuals
            </p>
            <div className={styles.line_div}></div>
            <div className={styles.button_array}>
              <ThemeButton2 button_text="About" button_link='/about'/>
              <ThemeButton3 button_link="/portfolio" />
            </div>
            <h1 className={styles.skills_header}>My Skills:</h1>
            <div className={styles.icon_array}>
              {skills.map((skill, key) => (
                <motion.div
                  className="cat-card-motion"
                  key={skill.id}
                  initial={{ opacity: 0, traslateX: -50, translateY: -50 }}
                  animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
                  transition={{ duration: 1, delay: 0.25 + key * 0.25 }}
                >
                  <IconWithToolTip
                    className="icon-widget"
                    title={skill.title}
                    cover_image={skill.image}
                    key={key}
                    cardClick={() => {
                      setClickedId(key);
                      setActiveIndex(key);
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right_items}>
        
        <Link href={ '/' + (heroProjectId+1)}>
          
          <div className={styles.right_items_content_bg}>
      
            <AnimatePresence>
              <motion.div
                key={heroProjectId}
                initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
                animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className={styles.right_items_content}
                exit={{
                  opacity: 0,
                  translateY: 150,
                  transition: { duration: 0.25, delay: 0 },
                }}
              >
                <div className={styles.texts_box}>
                  <h1>Featured Project:</h1>
                  <h2>{data.projects[heroProjectId].name}</h2>
                </div>
                <div
                  className={styles.image_styling_container}
                >
                  <div
                    className={styles.right_items_main_image_container}
                  >
                    <Image
                      src={data.projects[heroProjectId].image_source[0]}
                      alt = {"Project Image"}
                      layout = "fill"
                    
                    />
                            
                                  </div>
                                  <div
                                    className={styles.right_items_accent_image_container}
                                  >
                                    <Image
                      src={data.projects[heroProjectId].image_source[0]}
                      alt = {"Project Image"}
                      layout = "contain"
                    
                    />
               <FiExternalLink className={styles.cover_icon} />
                  </div>
                
                </div>
                <div className={styles.cover_item}><FiExternalLink className={styles.cover_icon} /></div>
              </motion.div>
            </AnimatePresence>
           
          </div>
          </Link>
        
        </div>
      </div>
      <div className={styles.right_slider_selectors}>
        <button
          onClick={() => {
            setHeroProjectId(0);
            console.log(heroProjectId);
          }}
        ></button>
        <button
          onClick={() => {
            setHeroProjectId(1);
            console.log(heroProjectId);
          }}
        ></button>
        <button
          onClick={() => {
            setHeroProjectId(2);
            console.log(heroProjectId);
          }}
        ></button>
      </div>
    </section>
  );
};

export default HomeHero;
