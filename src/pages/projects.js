
import power from './2.png';
import joke from './joke.png'
import '../css/project.css';
import { motion, Variants } from "framer-motion";


const Projects = ()=>{



let project = "<Projects>";
let end = "</Projects>";

const cardVariants: Variants = {
    offscreen: {
      y: 200,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity:1,
      transition: {
        delay:0.5,
        duration: 0.5
      }
    }
  };

  const descVariant: Variants = {
    offscreen: {
      x: 200,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity:1,
      transition: {
        duration: 0.8
      }
    }
  };
    return(
        <div id="project" style= {{height:"fit-content",backgroundColor:"black",zIndex:'10'}}>
            <motion.div className='project'>
                
               <h3>{project}</h3>
               <br/>
               <br/>
               <motion.div className='first_project' 
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true, amount: 0.8 }}> 
               <motion.img className='powerhouse' src = {power} variants = {cardVariants} />
               <motion.div variants={descVariant}>
                <br/>
               <p style={{fontSize : "16px"}}>Project 1 : </p>
               <p style={{fontSize:"20px"}}><b>Powerhouse Resort</b></p>
               <p className='project_dis'>A website built for Powerhouse Resort. Book your Hotel room in just a click.</p>
               <p style={{fontSize : "16px",color:'gray'}}>React JS &nbsp;&nbsp;<span> Firebase</span> &nbsp;&nbsp;<span> Email JS</span></p>
               
               <motion.img variants={cardVariants} style={{width:'45px',float:'right',cursor:'pointer'}} src = "https://icon-library.com/images/github-icon-svg/github-icon-svg-0.jpg"/>
              
               </motion.div>
               </motion.div>

               <motion.div className='second_project'
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true, amount: 0.8 }}> 
               <motion.div style={{textAlign:"left"}} variants = {descVariant}>
                <br/>
               <p style={{fontSize : "16px",textAlign:"left"}}>Project 2 : </p>
               <p style={{fontSize:"20px",textAlign:"left"}}><b>The Joke Bible</b></p>
               <p className='s_project'>A website built to entertain you. To find all types of jokes visit <a style={{color:"white"}} target = '_blank' href='https://chetan-pun.github.io/task/'>The Joke Bible</a></p>
               <p style={{fontSize : "16px",color:'gray',textAlign:"left"}}>React JS &nbsp;&nbsp;<span> Next JS</span> &nbsp;&nbsp;<span> Solidity JS</span></p>
               <motion.img variants={cardVariants} style={{width:'45px',float:'left',cursor:'pointer'}} src = "https://icon-library.com/images/github-icon-svg/github-icon-svg-0.jpg"/>
               </motion.div>
               <motion.img variants={cardVariants} className='powerhouse' src = {joke} />
              
               </motion.div>

               <h3>{end}</h3>
        
            </motion.div>
            
        </div>
    )
}

export default Projects