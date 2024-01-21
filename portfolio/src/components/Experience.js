import "./Experience.css";
import expPic from '../assets/officePic.jpg';

function Experience(){
    return(
        <div className='expContainer'>
            <div className='expImg'>
                <img src={expPic} alt=''></img>
            </div>
            <div className='expDetail'>
                <p>Experience</p>
                <div className='experiences'>
                    <div className='experience'>
                        <div className='expLogo'>
                                <img src='' alt=''></img>
                            </div>
                            <div className='experienceDetail'>
                                <div className='experienceInfo'><h6>2024-Heute</h6></div>
                                <div className='experienceInfo'><h4>Web Entwickler</h4></div>
                                <div className='experienceInfo'><h5>Elbenwald GmbH, Cottbus, Deutschland</h5></div>  
                            </div>
                    </div>
                    <div className='experience'>
                        <div className='expLogo'>
                                <img src='' alt=''></img>
                            </div>
                            <div className='experienceDetail'>
                                <div className='experienceInfo'><h6>2016-2019</h6></div>
                                <div className='experienceInfo'><h4>Qualitätskontrollleiter</h4></div>
                                <div className='experienceInfo'><h5>Miras Shargh Gold Factory, Tehran,Iran</h5></div>  
                            </div>
                    </div>
                    <div className='experience'>
                        <div className='expLogo'>
                                <img src='' alt=''></img>
                            </div>
                            <div className='experienceDetail'>
                                <div className='experienceInfo'><h6>2015-2016</h6></div>
                                <div className='experienceInfo'><h4>Qualitätskontrollassistent</h4></div>
                                <div className='experienceInfo'><h5>Miras Shargh Gold Factory, Tehran,Iran</h5></div>  
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Experience;