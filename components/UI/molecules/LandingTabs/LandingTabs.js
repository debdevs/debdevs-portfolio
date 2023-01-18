import LandingToggleButton from '../../atoms/LandingToggleButton/LandingToggleButton';
import styles from './LandingTabs.module.css';
import React from 'react';
import { useState, useContext } from 'react';
import { DynamicProjectLandingContext } from 'contexts/DynamicProjectLandingContext';
import { FiVideo, FiBookOpen, FiGithub, FiGlobe } from 'react-icons/fi';




const options = ['Overview', 'Challenges', 'Github', 'Site'];
const options1 = ['Overview', 'Challenges', 'Github', 'Site'];

const option_data = [
  {
    id: 1,
    title: 'Overview',
    icon: <FiVideo className={styles.tab_icon}/>,
  },
  {
    id: 2,
    title: 'Challenges',
    icon: <FiBookOpen className={styles.tab_icon}/>,
  },
  {
    id: 3,
    title: 'Github',
    icon: <FiGithub className={styles.tab_icon}/>,
  },
  {
    id: 4,
    title: 'Site',
    icon: <FiGlobe className={styles.tab_icon}/>,
  }



]
const LandingTabs = ({landing_context_value}) => {
  const [active, setActive] = useState(options[0]);
  const [count, setCount] = useState(0);
  const [clickedId, setClickedId] = useState(-1);

  const { landingTabId, setLandingTabId } = useContext(
    DynamicProjectLandingContext
  );

  const clickStyles = {
    h1_color: 'rgba(191, 209, 217, 1)',
    RainbowGradient_background_color: 'white',
    RainbowGradient_transform: 'translateY(5px)',
  };
  return (
    <div className={styles.tabs}>
      {option_data.slice(0, 4).map((option, i) => (
        <div
          className={styles.max_container}
          onClick={() => {setClickedId(i); setLandingTabId(i)}}
          key={i}
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
                <h1  className={styles.tab_text}>{option.title}</h1>
              </div>
              {option.icon}
             
            </div>       
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default LandingTabs;
