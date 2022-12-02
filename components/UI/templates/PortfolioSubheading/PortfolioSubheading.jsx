import React from 'react';
import ProjectsDisplayCard from '../../molecules/ProjectDisplayCard/ProjectDisplayCard';
import styles from './PortfolioSubheading.module.css';
import PortfolioProjectDisplayCard from '../../atoms/PortfolioProjectDisplayCard/PortfolioProjectDisplayCard';
import data from '../../../../public/project_data.js';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioPageContext } from '../../../../contexts/PortfolioPageContext';
import { useContext } from 'react';
const PortfolioSubheading = () => {
  const { workId, setWorkId } = useContext(PortfolioPageContext);
  return (
    <div className={styles.portfolio_subheading_parent}>
      <div className={styles.portfolio_subheading_cards_bg}>
        <AnimatePresence>
          <motion.div
            key={workId}
            initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
            animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
            className={styles.portfolio_subheading_cards}
            exit={{
              opacity: 0,
              translateY: 150,
              transition: { duration: 0.25, delay: 0 },
            }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
          >
            {data.projects.map((project, key) => (
              <PortfolioProjectDisplayCard
                key={key}
                key_value={key}
                button_text={project.name}
                project_image = {project.image_source}
                
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioSubheading;
