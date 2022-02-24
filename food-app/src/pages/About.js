import React from "react";
import MultiplePizzas from "../assests/pizza.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        
    <h2>About Us !</h2>
    <h3>Welcome To Tasty Pizza</h3>
   <p> Tasty Pizza is a Professional Food Platform. </p>
<p >Thanks For Visiting Our Site
Have a nice day !</p>
    
        
      </div>
    </div>
  );
}

export default About;