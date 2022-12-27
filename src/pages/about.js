

import '../css/about.css';


const About =()=>{


    return(
        <div id = "about" className='about' >
         <div>
            <h2>Hi, I am Chetan. Nice to meet you</h2>
            <p>Started coding 2 years ago, focused on improving myself since then.  I've done multiple projects.<br/>
            
             </p>
         </div>
         <br/>
         <br/>
         <br/>
         <div className='credentials'>
            <div className='frontend'>
                <img src = "https://icon-library.com/images/frontend-icon/frontend-icon-21.jpg"/>
                <p id='h'>Front-end Developer</p>
                <p><b>Languages I use :</b></p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
                <p><b>Framework I use :</b></p>
                <ul>
                    <li>React Js</li>
                    <li>Next Js</li>
                    
                </ul>
            </div>

            <div className='frontend'>
                <img src = "https://icon-library.com/images/frontend-icon/frontend-icon-21.jpg"/>
                <p id='h'>Back-end Developer</p>
                <p><b>Languages I use :</b></p>
                <ul>
                    <li>Javascript</li>
                    <li>PHP</li>
                    <li></li>
                </ul>
                <p><b>Framework I use :</b></p>
                <ul>
                    <li>Node Js</li>
                    <li>Express</li>
                    <li>Laravel</li>
                </ul>
            </div>
            <div className='frontend'>
                <img src = "https://icon-library.com/images/frontend-icon/frontend-icon-21.jpg"/>
                <p id='h'>Other</p>
                <p><b>Languages I use :</b></p>
                <ul>
                    <li>Python</li>
                    <li>Solidity Js</li>
                    <li>Java</li>
                </ul>
                <p><b>Library I use :</b></p>
                <ul>
                    <li>Selenium</li>
                    <li>Beautifulsoup</li>
                    <li>Scikit-learn</li>
                    <li>Tensorflow</li>
                </ul>
            </div>
         </div>
        </div>
    )
}

export default About;

