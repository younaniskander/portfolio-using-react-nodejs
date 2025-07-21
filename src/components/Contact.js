import React from 'react';

function Contact() {

  return (

    <div className="components one-second-animation" >
      <p className="p" >I'm currently looking for opportunities as a freelancing , so please reach out if you are looking for an enthusiastic and creative developer! </p><br></br>
      <div id="contact-div">
        <a href="https://github.com/iona-b" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/github-icon.svg")} alt='' className="contact-icons" />
        </a><br></br>
        <a href="https://www.linkedin.com/in/younan-iskander-9a6177222/" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/linkedin-icon.svg")} alt='' className="contact-icons" />
        </a><br></br>
        {/* <a href="https://dev.to/ionab" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/dev.to-icon.svg")} alt='' className="contact-icons" />
        </a><br></br> */}
        <a href="https://medium.com/@younaniskander2001" rel="noopener noreferrer" target="_blank" >
              <img src={require("../media/medium-icon.png")} alt='' className="contact-icons" />
            </a><br></br>
        <a href={`younaniskander2001@gmail.com`} >
          <img src={require("../media/send.png")} alt='' className="contact-icons" />
        </a><br></br>
      </div>
    </div>
    
  );
  
}

export default Contact;