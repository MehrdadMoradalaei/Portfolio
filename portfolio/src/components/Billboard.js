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
          <h1>Junior Software-Entwickler</h1>
          <div className='nameDesciption'>Mehrdad Moradalaei</div>
          <h3 style={{ color: "gray" }}>Ich folge meinen Träumen und Interessen.</h3>
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
