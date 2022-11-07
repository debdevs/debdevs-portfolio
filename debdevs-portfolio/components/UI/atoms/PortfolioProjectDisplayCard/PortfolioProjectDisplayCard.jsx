import React from 'react';
import styles from './PortfolioProjectDisplayCard.module.css';
import Image from 'next/future/image';
import skyway_web_image from '../../../../public/images/SkywayWebsite.png';
import PortfolioProjectButton from '../PortfolioProjectButton/PortfolioProjectButton';
import { motion, AnimatePresence } from 'framer-motion';
const PortfolioProjectDisplayCard = ({ button_text, key_value = 0 }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={key_value}
        initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
        animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
        transition={{ duration: 0.7, delay: 0 + key_value * 0.25 }}
        className={styles.portfolio_card_container}
      >
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
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioProjectDisplayCard;
