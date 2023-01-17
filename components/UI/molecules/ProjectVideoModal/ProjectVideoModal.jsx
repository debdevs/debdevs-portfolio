import React from 'react'
import styles from './ProjectVideoModal.module.css'
import MuxPlayer from "@mux/mux-player-react"; 
import { FiX } from 'react-icons/fi';
const ProjectVideoModal = ({mux_data_import, click_function}) => {
  return (
    <div className={styles.project_details_modal}>
        <div className={styles.project_details_modal_content}>
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

            </div>
            
        </div>

    </div>

  )
}

export default ProjectVideoModal