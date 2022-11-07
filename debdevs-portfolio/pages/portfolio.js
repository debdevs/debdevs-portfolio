import React from 'react';
import PortfolioHero from '../components/UI/templates/PortfolioHero/PortfolioHero';
import NavBar from '../components/UI/templates/NavBar/NavBar';
import PortfolioSubheading from '../components/UI/templates/PortfolioSubheading/PortfolioSubheading';

const portfolio = () => {
  return (
    <div>
      <NavBar />
      <PortfolioHero />
      <PortfolioSubheading />
    </div>
  );
};

export default portfolio;
