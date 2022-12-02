import React from 'react';
import styles from './ProjectsHero.module.css';
import LandingTabs from '../../molecules/LandingTabs/LandingTabs';
import Image from 'next/future/image';
import data from '../../../../public/project_data.js';
import AnimatedTextWord from '../../atoms/AnimatedTextWord/AnimatedTextWord';
const ProjectsHero = ({projectId = 0}) => {
  const tagline = data.projects[projectId].tagline
  const page_project = data.projects[projectId]
  return (
    <div>
      <section className={styles.projects_hero}>
        <div className={styles.hero_content}>
          <div className={styles.left_items}>
            <div
              className={styles.left_items_image_container}
            >
              <Image
      src={data.projects[projectId].image_source[0]}
      alt = {"Project Image"}
      layout = "fill"
    
          
    />
           
            </div>
          </div>
          <div className={styles.right_items}>
         
            <div className={styles.text_layout}>
            
              <h1>{data.projects[projectId].name}</h1>
           
                
              {tagline.split(" ").length > 2 ? 
              <div className={styles.text_row}>
                <h1>{tagline.split(" ")[0]}</h1>
                <span><AnimatedTextWord text={tagline.split(" ").splice(-2).join(" ")}/></span>
                
                </div>
              : 
              <div className={styles.text_row}>
              <h1>{tagline.split(" ")[0]}</h1>
              <span><AnimatedTextWord text={tagline.split(" ").splice(-1).join(" ")}/></span>
          
              </div>
              
              }
       
                {/* The <span>{tagline.split(" ").splice(-2).join(" ")}</span> */}
         
              <div className={styles.line_div} />
              <p>
                {page_project.landing_paragraph_info}
              </p>
              <h3>Tech Stack:</h3>

           <div className={styles.stack_row}>
              {data.projects[projectId].tech_stack.map((stack, i) => (
                <div key = {0+i} className={styles.stack_row}>
               <h4 className={styles.stack_text}>{stack}</h4>
               {i == data.projects[projectId].tech_stack.length-1 ? null:  <h4>•</h4>}
              
               
               
               </div>

            ))}</div>
              <h5>React • Django • AWS • Blender</h5>
              <tech_array></tech_array>
              <LandingTabs />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsHero;
