import React from 'react';
import PortfolioHero from '../components/UI/templates/PortfolioHero/PortfolioHero';
import NavBar from '../components/UI/templates/NavBar/NavBar';
import PortfolioSubheading from '../components/UI/templates/PortfolioSubheading/PortfolioSubheading';
import { PortfolioPageContext } from '../contexts/PortfolioPageContext';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'



const portfolio = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
    duration: { opacity: 0, x: 0, y: 0 },
    transition: { ease: 'easeInOut', duration: 120 },
  };
  const [workId, setWorkId] = useState(null);
  const router = useRouter()
  const [count, setCount] = useState(0)

  React.useEffect(() => {
    if (router.asPath?.includes( "portfolio?work-type=0") ) {
      setWorkId(0)
  } else if (router.asPath?.includes( "portfolio?work-type=1") ) {
      setWorkId(1)
  } else if (router.asPath?.includes( "portfolio?work-type=2") ) {
    setWorkId(2)
}else if (router.asPath?.includes( "portfolio?work-type=3") ) {
  setWorkId(3)
}else  {
  setWorkId(null)
}
  }, []);

 
 

  return (
    <div className='body'>
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
