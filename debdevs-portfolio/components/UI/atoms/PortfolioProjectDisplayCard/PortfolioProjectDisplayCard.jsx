import React from 'react';
import styles from './PortfolioProjectDisplayCard.module.css';
import Image from 'next/future/image';
import skyway_web_image from '../../../../public/images/SkywayWebsite.png';
import PortfolioProjectButton from '../PortfolioProjectButton/PortfolioProjectButton';
const PortfolioProjectDisplayCard = ({ button_text }) => {
  return (
    <div className={styles.portfolio_card_container}>
      <div className={styles.portfolio_image_container}>
        <Image
          className={styles.image_display_base_image}
          src={skyway_web_image}
          alt=""
          objectFit="cover"
          quality={100}
        />
      </div>
      <PortfolioProjectButton button_text={button_text} />
    </div>
  );
};

export default PortfolioProjectDisplayCard;
