import React from 'react';
import styles from './ProjectsHero.module.css';
import LandingTabs from '../../molecules/LandingTabs/LandingTabs';
import Image from 'next/future/image';
import data from '../../../../public/project_data.js';
import AnimatedTextWord from '../../atoms/AnimatedTextWord/AnimatedTextWord';
import { useEffect, useState } from 'react';
import { urlFor, client } from '../../../../client';
import MuxPlayer from "@mux/mux-player-react"; 
const ProjectsHero = ({projectId = 0, project_data = "#", projects = [], mux_data_import = "#", mux_video}) => {

  // const vid_query = `*[_type == "projects" && link.current == '${link}'][0]`;
                
  // const project = await client.fetch(vid_query);



if (project_data == undefined || {} ){
  console.log(project_data)
  project_data = project_data
}

// console.log(project_data?.video?.asset?._rev)
// console.log("EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs")

  if (project_data) {
    
    return (
      <div >

      { project_data == undefined || project_data == {} ? 
      
      
      console.log("retrieve data",project_data)
      
      
      
  
      
      
      
      :     
      
      
      <section className={styles.projects_hero}>




      <div className={styles.hero_content}>
        
 
        <div className={styles.left_items}>
          <div
            className={styles.left_items_image_container}
          >
            <Image
                src={ project_data != undefined? urlFor(project_data?.imgUrl?.asset?._ref).url(): showman_image}
                alt = {"Project Image"}
                layout = "fill"
  
                width = "800"
                height = "800"
              />
        
          </div>
        </div>
        <div className={styles.right_items}>
      
          <div className={styles.text_layout}>
          <div className={styles.text_top_items}>
            <h1 className={styles.text_layout_header}>{project_data.name}</h1>
        
              
            {project_data.tagline.split(" ").length > 2 ? 
            <div className={styles.text_row}>
              <h1  className={styles.text_layout_header}>{project_data.tagline.split(" ")[0]}</h1>
              <span><AnimatedTextWord text={project_data.tagline.split(" ").splice(-2).join(" ")}/></span>
              
              </div>
            : 
            <div className={styles.text_row}>
            <h1  className={styles.text_layout_header}>{project_data.tagline.split(" ")[0]}</h1>
            <span><AnimatedTextWord text={project_data.tagline.split(" ").splice(-1).join(" ")}/></span>
        
            </div>
            
            }</div>
  
              {/* The <span>{tagline.split(" ").splice(-2).join(" ")}</span> */}
      
            <div className={styles.line_div} />
            <p>
              {project_data.landing_paragraph_info}
            </p>
            <h3>Tech Stack:</h3>
  
        <div className={styles.stack_row}>
            {project_data.tech_stack.split(",").map((stack, i) => (
              <div key = {0+i} className={styles.stack_row}>
            <h4 className={styles.stack_text}>{stack}</h4>
            {i == project_data.tech_stack.split(",").length-1 ? null:  <h4>•</h4>}
            
            
            
            </div>
  
          ))}</div>
          {console.log("test", project_data?.video?.asset)}
          {/* {console.log("mux_test1", mux_data_import)}
          {console.log("mux_test2", mux_data_import[0].data)}
           */}



            <LandingTabs />
          </div>
        </div>
      </div>
      </section>
  
  
      
      
      
      
      
      
      
      
      
      
      
      }
  
   
  
        
   
      </div>
    )
  } else {
    return <div>Loading...</div>
    // or
    //return null;
  }


};

export default ProjectsHero;
