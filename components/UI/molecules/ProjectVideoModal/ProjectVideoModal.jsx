import React from 'react'

const ProjectVideoModal = () => {
  return (
    <div className={styles.project_details_modal}>
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

  )
}

export default ProjectVideoModal