import React from 'react';
import styles from './ProjectsHero.module.css';
import LandingTabs from '../../molecules/LandingTabs/LandingTabs';
import Image from 'next/future/image';
import data from '../../../../public/project_data.js';
import AnimatedTextWord from '../../atoms/AnimatedTextWord/AnimatedTextWord';
import { useEffect, useState } from 'react';
import { urlFor, client } from '../../../../client';
import showman_image from '../../../../public/images/showman_image.png'
const ProjectsHero = ({projectId = 0, project_data = "#", projects = []}) => {




if (project_data == undefined || {} ){
  console.log(project_data)
  project_data = project_data
}



  const page_project_val = projects.slice(projectId, projectId+1).map(project => (
    {
      project: project,

    } 
  ));

  const tagline_main = projects.slice(projectId, projectId+1).map(project => (
    {
      tagline: project.tagline,

    } 
  ));


// const tagline = (tagline_main[0]? 0: tagline_main);
// const page_project = (page_project_val[0]? 1: 0);

// const tagline =  projects[0].tagline;
// const page_project = (page_project_val[0]? 1: 0);


  
  
  return (
    <div >
  

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
              {data.projects[projectId].tech_stack.map((stack, i) => (
                <div key = {0+i} className={styles.stack_row}>
              <h4 className={styles.stack_text}>{stack}</h4>
              {i == data.projects[projectId].tech_stack.length-1 ? null:  <h4>•</h4>}
              
              
              
              </div>

            ))}</div>

              <LandingTabs />
            </div>
          </div>
        </div>
        </section>



      
 
    </div>
  );
};

export default ProjectsHero;
