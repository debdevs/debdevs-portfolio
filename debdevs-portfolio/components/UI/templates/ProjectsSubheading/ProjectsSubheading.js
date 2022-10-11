import React from 'react';
import styles from './ProjectsSubheading.module.css';
import TextLayoutBox from '../../molecules/TextLayoutBox/TextLayoutBox';
import ProjectDisplayMain from '../../atoms/ProjectDisplayMain/ProjectDisplayMain';
const ProjectsSubheading = () => {
  return (
    <div className={styles.subheading_parent}>
      <subheading_content className={styles.subheading_content}>
        <left_items className={styles.left_items}><ProjectDisplayMain /></left_items>
        <right_items className={styles.right_items}>
          <TextLayoutBox
            header_text="Intro"
            paragraph_text="I’ve been selling my graphics to people online since I was a kid, and it’s always something I’ve been passionate about.

 Showman is the culmination of all of my ideas since starting my journey into graphics. It is the most challenging, and rewarding project that I’ve worked on. Each time I ran into a problem, I found a solution. 

And I sure did run into a lot of problems. Python was my forte, but to fulfill my dream of creating this, I jumped completely into learning various web technologies from React to AWS. It took trial & error plus my signature night-hawkishness to get this project to where it is.

It uses Blender to render Motion Graphics generated by another project of mine: Rocketeer. It is something I’ve built from the ground up and am pretty proud of. "
          />
        </right_items>
      </subheading_content>
    </div>
  );
};

export default ProjectsSubheading;
