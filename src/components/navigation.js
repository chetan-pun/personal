import { motion } from 'framer-motion';
import {useState} from 'react';
import '../css/navbar.css';
import Email from './email';



const Navbar = ()=>{

    let [active,setActive] = useState(false);
    let [open,setOpen] = useState(false)
    function handleScroll(){
       if(window.pageYOffset > 75){
           setActive(true)
       }
       else{
           setActive(false)
       }
    }

    window.addEventListener("scroll",handleScroll);
   
    return(
        <motion.nav className= {active ? 'nav active' : 'nav'}
        initial = {{opacity : 0,y : -100 }}
        animate = {{
          opacity:1,
          y : 0,
          transition : {
            
            duration: 1
          }
        }} >
          <div className='nav_div'>

           
         <a className='link' href = '#' style={{color:'white'}} >Home</a>
         <a className='link' href = '#about'>About</a>
         <a className='link' href = '#project'>Projects</a>
         <a className='link' href = '#project'>Blog</a>
         </div>

         <button className='say_hello' onClick = {()=>setOpen(!open)}>Say hello!!!</button>
       
            
         
        </motion.nav>
    )
}

export default Navbar;