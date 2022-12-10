import styles from './PortfolioTabs.module.css';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import { PortfolioPageContext } from '../../../../contexts/PortfolioPageContext';
import options from '../../../../project_types.js'

const PortfolioTabs = () => {
  const [clickedId, setClickedId] = useState(-1);
  const { workId, setWorkId } = useContext(PortfolioPageContext);
  let work_type = '/portfolio/?/'
  return (
    <div className={styles.portfolio_tabs}>
      {options.map((option, i) => (
        <Link key = {i} href={work_type + options[i].replace(new RegExp(' ','g'),'-')}>
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
