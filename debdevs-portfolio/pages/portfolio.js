import React from 'react';
import PortfolioHero from '../components/UI/templates/PortfolioHero/PortfolioHero';
import NavBar from '../components/UI/templates/NavBar/NavBar';
import PortfolioSubheading from '../components/UI/templates/PortfolioSubheading/PortfolioSubheading';
import { PortfolioPageContext } from '../contexts/PortfolioPageContext';
import { useState } from 'react';
const portfolio = () => {
  const [workId, setWorkId] = useState(0);
  return (
    <div>
      <PortfolioPageContext.Provider
        value={{
          workId,
          setWorkId,
        }}
      >
        <NavBar />
        <PortfolioHero />
        <PortfolioSubheading />
      </PortfolioPageContext.Provider>
    </div>
  );
};

export default portfolio;
