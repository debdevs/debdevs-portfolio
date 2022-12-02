import styles from './HomeTabs.module.css';
import React from 'react';
import { useState } from 'react';
import { Context } from 'react';
import { useContext } from 'react';
import { HomeProjectDetailsContext } from '../../../../contexts/HomeProjectDetailsContext';
const options = ['Overview', 'Challenges', 'Github', 'Site'];

const HomeTabs = ({ tabClick }) => {
  const [active, setActive] = useState(options[0]);
  const [count, setCount] = useState(0);
  const [clickedId, setClickedId] = useState(-1);
  const [projectId, setProjectId] = useContext(HomeProjectDetailsContext);
  const { detailsIndex, setDetailsIndex } = useContext(
    HomeProjectDetailsContext
  );
  const { clickedItemId, setClickedItemId } = useContext(
    HomeProjectDetailsContext
  );
  return (
    <div className={styles.tabs}>
      {options.map((option, i) => (
        <button
        key = {i}
          className={styles.max_container}
          onClick={() => {
            setClickedId(i);
            setDetailsIndex(i);
            console.log(detailsIndex);
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
      ))}
    </div>
  );
};

export default HomeTabs;
