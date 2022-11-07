import React from 'react';
import styles from './HomeHero.module.css';
import IconWithToolTip from '../../atoms/IconWithToolTip/IconWithToolTip';
import skills from '../../../../public/data/skills.js';
import { motion } from 'framer-motion';
const HomeHero = () => {
  return (
    <section className={styles.home_header}>
      <content_box className={styles.content_box}>
        <left_items className={styles.left_items}>
          <header_info_box className={styles.header_info_box}>
            <h1 className={styles.h1}>Hello There,</h1>
            <h2 className={styles.h2}>
              I'm <span className={styles.span}>Deborah</span>
            </h2>
            <p className={styles.p}>
              A frontend developer with a passion for visuals
            </p>
            <line_div className={styles.line_div}></line_div>
            <button_array className={styles.button_array}>
              <button className={styles.blue_button}>About</button>
              <button className={styles.white_button}>
                <div className={styles.white_inner_button}>My Work</div>
              </button>
            </button_array>
            <h1 className={styles.skills_header}>My Skills:</h1>
            <icon_array className={styles.icon_array}>
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
            </icon_array>
          </header_info_box>
        </left_items>
        <right_items className={styles.right_items}>
          <right_items_content className={styles.right_items_content}>
            <h1>Featured Project:</h1>
            <h2>Showman Video</h2>
            <image_styling_container className={styles.image_styling_container}>
              <right_items_main_image_container
                className={styles.right_items_main_image_container}
              >
                <img src="https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-f8cdbc8/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg" />
              </right_items_main_image_container>
              <right_items_accent_image_container
                className={styles.right_items_accent_image_container}
              >
                <img src="https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-f8cdbc8/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg" />
              </right_items_accent_image_container>
            </image_styling_container>
          </right_items_content>
        </right_items>
      </content_box>
    </section>
  );
};

export default HomeHero;
