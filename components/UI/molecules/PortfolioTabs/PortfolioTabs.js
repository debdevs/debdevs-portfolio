import styles from './PortfolioTabs.module.css';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import { PortfolioPageContext } from '../../../../contexts/PortfolioPageContext';

const options = [
  'Frontend-Development',
  'Visual Design',
  'Animation',
  'Email Development',
];

const PortfolioTabs = () => {
  const [clickedId, setClickedId] = useState(-1);
  const { workId, setWorkId } = useContext(PortfolioPageContext);
  let work_type = '/portfolio/?work-type='
  return (
    <div className={styles.portfolio_tabs}>
      {options.map((option, i) => (
        <Link key = {i} href={work_type + i}>
          <button
            className={styles.max_container}
            onClick={() => {
              setClickedId(i);
              setWorkId(i);
          
            }}
          >
            <div className={styles.blue_bg}></div>
            <div className={styles.white_bg}></div>
            <div className={styles.button_parent}>
              <div
                className={
                  i === clickedId
                    ? styles.active_rainbowGradient
                    : styles.rainbowGradient 
                    
                    &&
                    i === workId 
                    ?styles.active_rainbowGradient
                    :styles.rainbowGradient 

                }
              >
                <div
                  key={i}
                  className={
                    i === clickedId ? styles.active_text : styles.innerSquare
                  }
                >
                  <h1>{option}</h1>
                </div>
              </div>
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioTabs;
