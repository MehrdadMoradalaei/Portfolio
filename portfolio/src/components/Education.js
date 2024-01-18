import './Education.css';
import eduPic from '../assets/eduBlue.e52874887400964b453a36ed1c40bc4f.png'
function Education(){
    return(
        <div className='eduContainer'>
            <div className='eduImg'>
                <img src={eduPic} alt=''></img>
            </div>
            <div className='eduDetail'>
                <p>Education</p>
                <div className='courses'>
                    <div className='course'>
                        <div className='eduLogo'>
                            <img src='' alt=''></img>
                        </div>
                        <div className='courseDetail'>
                            <div className='courseInfo'><h6>2015-2018</h6></div>
                            <div className='courseInfo'><h4>course:hhvbhvjh</h4></div>
                            <div className='courseInfo'><h5>institution:hvjhv</h5></div>  
                        </div>
                    </div>
                    <div className='course'>
                        <div className='eduLogo'>
                                <img src='' alt=''></img>
                            </div>
                            <div className='courseDetail'>
                                <div className='courseInfo'><h6>2015-2018</h6></div>
                                <div className='courseInfo'><h4>course:hhvbhvjh</h4></div>
                                <div className='courseInfo'><h5>institution:hvjhv</h5></div>  
                            </div>
                    </div>
                    <div className='course'>
                        <div className='eduLogo'>
                                <img src='' alt=''></img>
                            </div>
                            <div className='courseDetail'>
                                <div className='courseInfo'><h6>2015-2018</h6></div>
                                <div className='courseInfo'><h4>course:hhvbhvjh</h4></div>
                                <div className='courseInfo'><h5>institution:hvjhv</h5></div>  
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education;