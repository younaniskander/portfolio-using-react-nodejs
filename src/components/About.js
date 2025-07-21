import React from 'react';

function About() {

  return (

    <div className="components" id="about-div">
      <img src={require("../media/DSC_3660 (2).jpg")} alt='' id="profile-picture" />
      <p className="p" id="about" >I'm Younan, a recent graduate from the immersive AI Engineering program at kafr elsheikh university. </p>
      <p className="p" id="about" >I'm originally from Scotland, but I now live in the San Francisco Bay Area, where I'm currently looking for opportunities. </p> 
      <p className="p" id="about" >Without knowing it, I think I've always been a coder at heart - having the chance to learn and develop myself is what motivates me more than anything else, and I love being able to combine my creative side with my problem solving skills. I'm organised, detail-oriented, and motivated, and my international background in both cultural institutions and the food industry means that I am highly adaptable and bring a unique perspective to all of my coding projects.</p> 
    </div>
    
  );
  
}

export default About;