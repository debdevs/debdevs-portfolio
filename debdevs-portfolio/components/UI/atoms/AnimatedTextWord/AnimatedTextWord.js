import React from 'react'
import styles from './AnimatedTextWord.module.css'
import { motion } from 'framer-motion'
const AnimatedTextWord = ({text}) => {
    const words = text.split(" ")
    const letters = text.split("")
    const container = {
        hidden: {opacity: 0},
        visible: (i = 1) => ({opacity:1,
        transition:{staggerChildren: 0.12, delayChildren: 0.04 * i}})
    };
    const child = {
        visible:{
            opacity:1,
            y:0,
            transition:{
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },

        hidden:{
            opacity:0,
            y:20,
            transition:{
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        }
    }
  return (
    <motion.div
    initial = "hidden"
    animate = "visible"
    style = {{overflow: "hidden"}} 
    variants = {container}>{letters.map((word, index) =>
    <motion.span
     variants = {child} 
     style = {{}} 
     className = {styles.animated_text}
     key = {index}
     >
        {word}
    </motion.span>
    
    )}
    </motion.div>
  )
}

export default AnimatedTextWord