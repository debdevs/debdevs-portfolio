import React from 'react'
import styles from './ProjectChallengesModal.module.css'
import MuxPlayer from "@mux/mux-player-react"; 
import { FiX } from 'react-icons/fi';

import { motion, AnimatePresence } from 'framer-motion';
const ProjectChallengesModal = ({mux_data_import, click_function, project_import}) => {
  return (
    <AnimatePresence>
        <motion.div
            key={0}
            initial={{ opacity: 0, traslateX: 0, translateY: 150 }}
            animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
            exit={{
              opacity: 0,
              translateY: -150,
              transition: { duration: 0.25, delay: 0 },
            }}
            transition={{
              duration: 0.8,
              delay: 0,
            }}
            className={styles.project_challenges_modal}
          >
   
      
        <div className={styles.project_challenges_modal_content }>
        
        <div><FiX className= {styles.close_icon} onClick = {click_function}/></div>
            <div className= {styles.challenges_text_container}>
                
              <h1>{project_import.challenges}</h1>
                

               <div className={styles.project_challenges_modal_01} onClick = {click_function} ></div>
            </div>
         
            
        </div>

    </motion.div>
</AnimatePresence>
  )
}

export default ProjectChallengesModal