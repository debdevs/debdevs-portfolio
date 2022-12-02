import React from 'react'
import styles from './AnimatedTextWord.module.css'
import { motion } from 'framer-motion'
const AnimatedTextWord = ({text}) => {
    const words = text.split(" ")

    const letters = Array.from(text);
    const container = {
        hidden: {opacity: 0, y:0},
        visible: (i = 1) => ({opacity:1,y:0,
        transition:{staggerChildren: 0.04, staggerDirection: 1, delayChildren: 0.12 * i}})
    };
    const child = {
        visible:{
            opacity:1,
            y:0,
            x:0,
        
            transition:{
                type: "tween",
                damping: 35,
                stiffness: 500,
              
        
            },
        },

        hidden:{
            opacity:0,
            y:10,
            x:-20,
            transition:{
                type: "tween",
                damping: 35,
                stiffness: 500,
               
            },
        }
    }
  return (
    <motion.div
  
    initial = "hidden"
    animate = "visible"
    className = {styles.container}
    variants = {container}>{letters.map((word, index) =>
    <motion.span
     variants = {child} 
        
     className = {styles.animated_text}
     key = {word - index}

     >
        {word === " " ? "\u00A0" : word}
    </motion.span>
    
    )}
    </motion.div>
  )
}

export default AnimatedTextWord