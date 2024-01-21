import './Project.css';
import shopImg from '../assets/shop.png'
function Project(){
    return(
    <div>
        <div className='proTitle'>
            <p>Projects</p>
        </div>
        <div className='projectContainer'>
        <div className='project'>
            <div className='projectDetail'>
                <h2>Online Shop Website</h2>
                <div className='projectPic'>
                    <img src={shopImg} alt=''></img>
                </div>
                <div className='projectTech'>
                    <ul>
                        <li>React</li>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                    </ul>
                </div>
                <div className='projectLink'>
                 <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">&</a>
                </div>  
            </div>
        </div>
        <div className='project'>
            <div className='projectDetail'>
                <h2>News Website</h2>
                <div className='projectPic'>
                    <img src={shopImg} alt=''></img>
                </div>
                <div className='projectTech'>
                    <ul>
                        <li>React</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                </div>
                <div className='projectLink'>
                 <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">&</a>
                </div>  
            </div>
        </div>
        <div className='project'>
            <div className='projectDetail'>
                <h2>Christmas Countdown</h2>
                <div className='projectPic'></div>
                <div className='projectTech'>
                    <ul>
                        <li>React</li>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                    </ul>
                </div>
                <div className='projectLink'>
                 <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">&</a>
                </div>  
            </div>
        </div>
        </div>
    </div>
    )
}
export default Project;