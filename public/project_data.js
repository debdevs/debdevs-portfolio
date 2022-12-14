import showman_image from '../../debdevs-portfolio/public/images/showman_image.png'
import rocketeer_image from '../../debdevs-portfolio/public/images/rocketeer_image.png'
import vision_html_image from '../../debdevs-portfolio/public/images/vision_html_email.png'
import vision_html_image_1 from '../../debdevs-portfolio/public/images/vision_html_email_1.png'
const categories = ['Web-Development','Visual Design', 'Animation', 'Email Development', 'Software Development']
const tech_stack_list = ['HTML','CSS', 'JS', 'Figma', 'Blender']
const data = {
  projects: [
    {
      id:1,
      name: 'Showman Video',
      description:
        'A fullstack web application for delivering on-demand custom videos',
      extra_info: `Showman video is a full-stack web application that Uses a unique combination of technologies to deliver custom & on-demand videos to individuals and businesses.

        It uses React for the front-end, Django for user authentication and page management, and the REST API to communicate with AWS for user renders`,
      tagline: 'The Magnum Opus',
      story: `I’ve been selling my graphics to people online since I was a kid, and it’s always something I’ve been passionate about. 

        Showman is the culmination of all of my ideas since starting my journey into graphics. It is the most challenging, and rewarding project that I’ve worked on. Each time I ran into a problem, I found a solution. 
        
        And I sure did run into a lot of problems. Python was my forte, but to fulfill my dream of creating this, I jumped completely into learning various web technologies from React to AWS. It took trial & error plus my signature night-hawkishness to get this project to where it is.
        
        It uses Blender to render Motion Graphics generated by another project of mine: Rocketeer. It is something I’ve built from the ground up and am pretty proud of. `,

      second_heading: 'Getting Started',
      second_description: `I’ve been selling my graphics to people online since I was a kid, and it’s always something I’ve been passionate about. 

      Showman is the culmination of all of my ideas since starting my journey into graphics. It is the most challenging, and rewarding project that I’ve worked on. Each time I ran into a problem, I found a solution. 
      
      And I sure did run into a lot of problems. Python was my forte, but to fulfill my dream of creating this, I jumped completely into learning various web technologies from React to AWS. It took trial & error plus my signature night-hawkishness to get this project to where it is.
      
      It uses Blender to render Motion Graphics generated by another project of mine: Rocketeer. It is something I’ve built from the ground up and am pretty proud of. `,
      link: '',
      image_source: [showman_image,showman_image],
      challenges: `My main challenge? the backend. I learned nodejs just to make this project and now I can say that I'm at the very least comfortable with it.`,
      category: [categories[0],],
      tech_stack: [tech_stack_list[0],'CSS', 'JS', 'Figma', 'Blender'],
      landing_paragraph_info: "My personal favorite project. A fullstack application to deliver videos to individuals and businesses. It uses custom technology from end to end.",

    },
    {
      id:2,
      name: 'Rocketeer',
      description: 'A Python video generation and workflow tool for Blender',
      extra_info: `Rocketer is a tool that I created and use to generate Motion Graphics in Blender. It is a workflow tool that improves efficiency for the production of motion graphics in Blender. It is also capable of generating random styles based on an algorithm that derives processes from my workflow-style.`,
      tagline: 'The Copilot',
      story: `Rocketer is a tool that I use to generate graphics in Blender. It is a workflow tool that improves efficiency for the production of motion graphics in Blender. It's also capable of generating random styles based on an algorithm that derives processes from my workflow-style.`,

      second_heading: 'Getting Started',
      second_description: `I’ve been selling my graphics to people online since I was a kid, and it’s always something I’ve been passionate about. 

      Showman is the culmination of all of my ideas since starting my journey into graphics. It is the most challenging, and rewarding project that I’ve worked on. Each time I ran into a problem, I found a solution. 
      
      And I sure did run into a lot of problems. Python was my forte, but to fulfill my dream of creating this, I jumped completely into learning various web technologies from React to AWS. It took trial & error plus my signature night-hawkishness to get this project to where it is.
      
      It uses Blender to render Motion Graphics generated by another project of mine: Rocketeer. It is something I’ve built from the ground up and am pretty proud of. `,
      link: '',
      image_source: [rocketeer_image,rocketeer_image],
      challenges: `Creating the animation offset function proved to be the biggest challenge. The way Blender's system works, I have to access certain properties recursively -
      so I had to have one function access multiple different values in a variety of ways in order to offset them by a constant integer value`,
      category: [categories[4],],
      tech_stack: [tech_stack_list[0],'CSS', 'JS', 'Figma', 'Blender'],
      landing_paragraph_info: "Everybody needs a right-hand man, and that's what Rocketeer is. It is a workflow tool that aids in the production and generation of professional quality graphics",
    },

    {
      id:3,
      name: 'Vision HTML Email',
      description: 'A modern Email design created in Figma and implemented using HTML',
      extra_info: `The design theme for this project was to have a modern presentation for a fitness business. During the process, I chose colors from a given palette and used the best UI/UX practices to get a modern feel.`,
      tagline: 'Modern Design',
      story: `The design theme for this project was to have a modern presentation for a fitness business. During the process, I chose colors from a given palette and used the best UI/UX practices to get a modern feel. `,

      second_heading: 'Getting Started',
      second_description: `The design theme for this project was to have a modern presentation for a fitness business. During the process, I chose colors from a given palette and used the best UI/UX practices to get a modern feel. `,
      link: '',
      image_source: [vision_html_image_1,showman_image],
      challenges: ``,
      category: [categories[3],],
      tech_stack: [tech_stack_list[0],'CSS', 'JS', 'Figma'],
      landing_paragraph_info: "A simple HTML Email designed in figma and implemented using HTML.",
    },
  ],
};

export default data;
