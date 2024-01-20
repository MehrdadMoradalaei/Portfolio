import './Project.css';
function Project(){
    return(
    <div>
        <div className='proTitle'>
            <p>Projects</p>
        </div>
        <div className='projectContainer'>
        <div className='project'>
            <div>
                <h2>Online Shop Website</h2>
                <div className='projectPic'></div>
                <div className='projectDetail'>
                 <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">&</a>
                </div>  
            </div>
        </div>
        <div className='project'>
            <div>
                <h2>News Website</h2>
                <div className='projectPic'></div>
                <div className='projectDetail'>
                 <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">&</a>
                </div>  
            </div>
        </div>
        <div className='project'>
            <div>
                <h2>Christmas Countdown</h2>
                <div className='projectPic'></div>
                <div className='projectDetail'>
                 <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">&</a>
                </div>  
            </div>
        </div>
        </div>
    </div>
    )
}
export default Project;