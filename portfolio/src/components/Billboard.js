import React from 'react';
import cvPic from "../assets/cvPic.jpg";
import pdfFile from "../assets/CV-Mehrdad Moradalaei.pdf";
import "./Billboard.css";

function Billboard() {
  return (
    <div className="container">
      <div className="leftSide">
        <div className="title">Mehrdad Moradalaei</div>
        <div>
          <img src={cvPic} className="img" alt="" />
        </div>
      </div>
      <div className="rightSide">
        <div className="description">
          <h2>Junior Software Developer</h2>
          <h1>Mehrdad Moradalaei</h1>
          <p>
            I am a person who follows his dreams and his interests. Sometimes your second favorite career is so attractive that it makes you change your whole world. In my case, "Programing" has changed my world
          </p>
          <div className="buttonContainer">
            <a className='link' href={pdfFile} download="CV-Mehrdad Moradalaei" target="_blank" rel="noopener noreferrer">
              <div className="cvButton">Download CV</div>
            </a>
            <div className="contactButton">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
