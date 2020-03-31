import React from "react";
import "./About.css";

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span>Secret Sunshine (2007)</span>
            <span>Lee Chang-dong</span>
        </div>
    );
}

export default About;