import LandingToggleButton from '../../atoms/LandingToggleButton/LandingToggleButton';
import styles from './LandingTabs.module.css';
import React from 'react';
import { useState } from 'react';
const options = ['Overview', 'Challenges', 'Github', 'Site'];
const LandingTabs = () => {
  const [active, setActive] = useState(options[0]);
  return (
    <tabs className={styles.tabs}>
      {options.map((option) => (
        <LandingToggleButton
          key={option}
          active={active === option}
          onClick={() => setActive(option)}
        >
          {option}
        </LandingToggleButton>
      ))}

      <LandingToggleButton />
    </tabs>
  );
};

export default LandingTabs;
