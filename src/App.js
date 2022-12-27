import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';
import Navbar from './components/navigation';
import About from './pages/about';
import  Projects from './pages/projects';
import Other from './pages/other';
import Links from './components/links';
import { motion, useScroll,useAnimation } from "framer-motion";



function App() {
  let { scrollYProgress } = useScroll();
  

  
  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar/>
      <div className='background'>
        <motion.div className='intro' initial = {{opacity : 0,x : -100 }}
        animate = {{
          opacity:1,
          x : 0,
          transition : {
            delay:0.2,
            duration: 1
          }
        }}
        >
          <h1>Hi,<br/> I am <br/>Chetan.</h1>

        </motion.div>
        <Spline scene="https://prod.spline.design/8RrOVlUe2NzEiH6L/scene.splinecode" />
       <motion.div className='press_drag' 
       initial = {{opacity : 0,y : 100 }}
       animate = {{
         opacity:1,
         y : 0,
         transition : {
          delay:0.2,
           duration: 1
         }
       }}>
        Press and drag to orbit
       </motion.div>
      </div>
      <div class="custom-shape-divider-bottom-1661770605">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <About/>
      <Projects/>
      <Other/>
      <Links/>
    </div>
  );
}

export default App;
