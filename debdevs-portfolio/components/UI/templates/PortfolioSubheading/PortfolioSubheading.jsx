import React from 'react';
import ProjectsDisplayCard from '../../molecules/ProjectDisplayCard/ProjectDisplayCard';
import styles from './PortfolioSubheading.module.css';
import PortfolioProjectDisplayCard from '../../atoms/PortfolioProjectDisplayCard/PortfolioProjectDisplayCard';
const PortfolioSubheading = () => {
  return (
    <div className={styles.portfolio_subheading_parent}>
      <div className={styles.portfolio_subheading_cards}>
        <PortfolioProjectDisplayCard />
        <PortfolioProjectDisplayCard />
        <PortfolioProjectDisplayCard />
      </div>
    </div>
  );
};

export default PortfolioSubheading;
