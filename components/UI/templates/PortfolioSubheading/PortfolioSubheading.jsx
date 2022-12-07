import React from 'react';
import ProjectsDisplayCard from '../../molecules/ProjectDisplayCard/ProjectDisplayCard';
import styles from './PortfolioSubheading.module.css';
import PortfolioProjectDisplayCard from '../../atoms/PortfolioProjectDisplayCard/PortfolioProjectDisplayCard';
import data from '../../../../public/project_data.js';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioPageContext } from '../../../../contexts/PortfolioPageContext';
import { useContext } from 'react';
import { urlFor, client } from 'client';
const PortfolioSubheading = () => {
  const { workId, setWorkId } = useContext(PortfolioPageContext);

  const [projects, setProjects] = useState([])
useEffect(() => {
  const query = '*[_type == "projects"]'
  client.fetch(query).then((data => setAbouts(data)))

}, [])

let web_dev_projects = [];
data.projects.forEach(function (work) {
    if ( work.category.includes("Web-Development")){
    web_dev_projects.push(work);
    }
  });

let visual_design_projects = [];
data.projects.forEach(function (work) {
    if ( work.category.includes("Visual Design")){
      visual_design_projects.push(work);
    }
  });

let animation_projects = [];
data.projects.forEach(function (work) {
    if ( work.category.includes("Web-Development")){
      animation_projects.push(work);
    }
  });
  let email_projects = [];
  data.projects.forEach(function (work) {
      if ( work.category.includes("Email Development")){
        email_projects.push(work);
      }
    });
  

  return (
    <div className={styles.portfolio_subheading_parent}>
      <div className={styles.portfolio_subheading_cards_bg} onClick = {()=>console.group(web_dev_projects)}>
  
        <AnimatePresence>
        {workId == 0? 
        <motion.div
            key={workId}
            initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
            animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
            className={styles.portfolio_subheading_cards}
            exit={{
              opacity: 0,
              translateY: 150,
              transition: { duration: 0.25, delay: 0 },
            }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
          >
            {projects.map((project, key) => (
              <PortfolioProjectDisplayCard
                key={key}
                key_value={key}
                button_text={project.name}
                project_image = {project.image_source}
                
              />
            ))}
          </motion.div>
          
          : workId == 1 ?         
          
          <motion.div
          key={workId}
          initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
          animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
          className={styles.portfolio_subheading_cards}
          exit={{
            opacity: 0,
            translateY: 150,
            transition: { duration: 0.25, delay: 0 },
          }}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
        >
          {visual_design_projects.map((project, key) => (
            <PortfolioProjectDisplayCard
              key={key}
              key_value={key}
              button_text={project.name}
              project_image = {project.image_source}
              
            />
          ))}
        </motion.div> 
         : workId == 2 ? null
        
        
         : workId == 3 ? 

         <motion.div
         key={workId}
         initial={{ opacity: 0, traslateX: 0, translateY: 50 }}
         animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
         className={styles.portfolio_subheading_cards}
         exit={{
           opacity: 0,
           translateY: 150,
           transition: { duration: 0.25, delay: 0 },
         }}
         transition={{
           duration: 0.5,
           delay: 0,
         }}
       >
         {email_projects.map((project, key) => (
           <PortfolioProjectDisplayCard
             key={key}
             key_value={key}
             button_text={project.name}
             project_image = {project.image_source}
             
           />
         ))}
       </motion.div> 

         :null
        }

        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioSubheading;
