import './Skills.css';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import jquery from '../assets/jquery.png';
import mysql from '../assets/mysql.png';
import typescript from '../assets/Typescript.png';
import tailwind from '../assets/tailwind.png';
function Skill(){
    return(
        <div className='skillContainer'>
            <div className='skillBanner'><p>Skills</p></div>
            <div className='skillsContainer'>
                <div className='skill'>
                    <img src={html} alt='' className='imgLogo'></img>
                    <h3 style={{color: "rgb(33, 33, 33)"}}>HTML5</h3>
                </div>
                <div className='skill'>
                    <img src={css} alt='' className='imgLogo'></img>
                    <h3 style={{color: "rgb(33, 33, 33)"}}>Css3</h3>
                </div>
                <div className='skill'>
                    <img src={js} alt='' className='imgLogo'></img>
                    <h3 style={{color: "rgb(33, 33, 33)"}}>JavaScript</h3>
                </div>
                <div className='skill'>
                    <img src={typescript} alt='' className='imgLogo'></img>
                    <h3 style={{color: "rgb(33, 33, 33)"}}>TypeScript</h3>
                </div>
                <div className='skill'>
                    <img src={jquery} alt='' className='imgLogo'></img>
                    <h3 style={{color: "rgb(33, 33, 33)"}}>jQuery</h3>
                </div>
                <div className='skill'>
                    <img src={tailwind} alt='' className='imgLogo'></img>
                    <h3 style={{color: "rgb(33, 33, 33)"}}>Tailwind</h3>
                </div>
                <div className='skill'>
                    <img src={mysql} alt='' className='imgLogo'></img>
                    <h3 style={{color: "rgb(33, 33, 33)"}}>MySQL</h3>
                </div>
            </div>

        </div>
    )
}

export default Skill;