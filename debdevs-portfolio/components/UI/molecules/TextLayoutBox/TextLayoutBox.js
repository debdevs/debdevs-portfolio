import React from 'react';
import styles from './TextLayoutBox.module.css';
const TextLayoutBox = ({ header_text, paragraph_text }) => {
  return (
    <div className={styles.text_layout_box}>
      <h1>{header_text}</h1>
      <h2>{paragraph_text}</h2>
    </div>
  );
};

export default TextLayoutBox;
