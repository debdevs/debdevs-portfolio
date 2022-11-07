import React from 'react';
import ProjectsDisplayCard from '../../molecules/ProjectDisplayCard/ProjectDisplayCard';
import styles from './PortfolioSubheading.module.css';
import PortfolioProjectDisplayCard from '../../atoms/PortfolioProjectDisplayCard/PortfolioProjectDisplayCard';
import data from '../../../../public/project_data.js';

const PortfolioSubheading = () => {
  return (
    <div className={styles.portfolio_subheading_parent}>
      <div className={styles.portfolio_subheading_cards}>
        {data.projects.map((name, key) => (
          <PortfolioProjectDisplayCard key_value={key} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSubheading;
