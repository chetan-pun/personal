
import '../css/other.css'
import {motion} from 'framer-motion'

const Links = () =>{

  function handleGit(){

  } 

    return(
        <motion.div id = "links" initial = {{opacity : 0,y : 100 }}
        animate = {{
          opacity:1,
          y : 0,
          transition : {
            delay:0.2,
            duration: 1
          }
        }}>
          < a target= '_blank' href='https://github.com/chetan-pun' ><i  className="github icon" onClick={handleGit} ></i></a><br/>

          <a target= '_blank'  href='https://www.linkedin.com/in/chetan-pun-03a813220/' > <i className="linkedin icon"></i></a><br/>
          <a target= '_blank' href='https://twitter.com/chetanpun9' ><i class="twitter icon"></i></a>
        </motion.div>
    )

}

export default Links