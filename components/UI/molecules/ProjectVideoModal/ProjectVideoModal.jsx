import React from 'react'
import styles from './ProjectVideoModal.module.css'
import MuxPlayer from "@mux/mux-player-react"; 
import { FiX } from 'react-icons/fi';

import { motion, AnimatePresence } from 'framer-motion';
const ProjectVideoModal = ({mux_data_import, click_function}) => {
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
            className={styles.project_details_modal}
          >
   
      
        <div className={styles.project_details_modal_content }>
        
        <div><FiX className= {styles.close_icon} onClick = {click_function}/></div>
            <div className= {styles.mux_player}>
                

                
            <MuxPlayer
            streamType="on-demand"
            // playbackId= { project_data.video.asset._rev != undefined ?  project_data.video.asset._rev :  project_data.video.asset._rev.toString()}
            // playbackId= {project_data != undefined  ? project_data?.video?.asset?._ref : null}
            // playbackId='cQ02Qyn3vynkegSAvmdENtxN5BCD101dnEp9RE7RUjftM.m3u8'
            mux_data_import
            playbackId = {mux_data_import[0]?.playbackId ? mux_data_import[0].playbackId : null}
            />
               <div className={styles.project_details_modal_01} onClick = {click_function} ></div>
            </div>
         
            
        </div>

    </motion.div>
</AnimatePresence>
  )
}

export default ProjectVideoModal