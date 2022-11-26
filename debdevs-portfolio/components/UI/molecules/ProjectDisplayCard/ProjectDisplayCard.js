import React from 'react';
import { useContext } from 'react';
import { Context } from 'react';
import { HomeProjectDetailsContext } from '../../../../contexts/HomeProjectDetailsContext';
import styles from './ProjectDisplayCard.module.css';
import { ButtonRowFront } from '../../../../components/UI/atoms/ButtonRowFront/ButtonRowFront';
import { ThemeButton1 } from '../../../../components/UI/atoms/ThemeButton1/ThemeButton1';
import { ThemeButton2 } from '../../../../components/UI/atoms/ThemeButton2/ThemeButton2';
import HomeTabs from '../HomeTabs/HomeTabs';
import data from '../../../../public/project_data.js';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/future/image';
import github_image from '../../../../public/company_icons/GitHub-Mark-120px-plus.png';
const ProjectDisplayCard = ({
  index_value = 0,
  details_index_value = 0,
  title,
  tagline,
  image_source = "https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-f8cdbc8/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg",
  click_prop,
}) => {

  const [projectId, setProjectId] = useContext(HomeProjectDetailsContext);
  const { projectListId, setProjectListId } = useContext(
    HomeProjectDetailsContext
  );
  return (
    <subheading_right_bg_overlay className={styles.subheading_right_bg_overlay}>
      <h1 className={styles.project_header}>{title}</h1>
      <h2 className={styles.project_overview}>{tagline}</h2>
      <image_fx_container className={styles.image_fx_container}>
        <left_image_container className={styles.left_image_container}>
        <Image
      src={image_source[0]}
      layout = "fill"
    
              className={styles.left_image}
    />
        </left_image_container>
        <right_image_container className={styles.right_image_container}>
          {/* <img
            src={image_source}
            className={styles.right_image}
          /> */}

<Image
      src={image_source[0]}
      alt = {"Project Image"}
      layout = "fill"
    
              className={styles.right_image}
    />
        </right_image_container>
      </image_fx_container>

      <HomeTabs />
      <div className={styles.paragraph_container}>
        <AnimatePresence>
          <motion.div
            key={details_index_value}
            initial={{ opacity: 0, traslateX: 0, translateY: 0 }}
            animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
            exit={{
              opacity: 0,
              translateY: 0,
              transition: { duration: 0.25, delay: 0 },
            }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            className={styles.portfolio_card_container}
          >
            {details_index_value === 0 && (
              <p className={styles.project_description}>
                {data.projects[index_value].extra_info}
              </p>
            )}
            {details_index_value === 1 && (
              <p className={styles.project_description}>
                {data.projects[index_value].challenges}
              </p>
            )}
            {details_index_value === 2 && (
              <div className={styles.image_wrapper}>
                <button className={styles.image_button}>Go</button>
                <Image src={github_image} className={styles.github_image} />
              </div>
            )}
          </motion.div>{' '}
        </AnimatePresence>
      </div>

      <project_buttons className={styles.project_buttons}>
        <ThemeButton1 button_link={ '/' + (index_value+1)}/>
        <ThemeButton2 button_link="javascript:void(0);" click_function={() => {
                  setProjectListId( click_prop+1 < data.projects.length? click_prop+1:0);
      
                  console.log(click_prop);
                }} />
      </project_buttons>
    </subheading_right_bg_overlay>
  );
};

export default ProjectDisplayCard;
