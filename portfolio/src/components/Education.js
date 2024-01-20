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
                                <div className='courseInfo'><h6>2023</h6></div>
                                <div className='courseInfo'><h4>course:  Front-end Development by ReactJS</h4></div>
                                <div className='courseInfo'><h5>institution:  Coursa Institute, Iran</h5></div>  
                            </div>
                    </div>
                    <div className='course'>
                        <div className='eduLogo'>
                                <img src='' alt=''></img>
                            </div>
                            <div className='courseDetail'>
                                <div className='courseInfo'><h6>2022</h6></div>
                                <div className='courseInfo'><h4>course: HTML, CSS, and JavaScript for Web Developers</h4></div>
                                <div className='courseInfo'><h5>institution: Johns Hopkins University, U.S.A</h5></div>  
                            </div>
                    </div>
                    <div className='course'>
                        <div className='eduLogo'>
                            <img src='' alt=''></img>
                        </div>
                        <div className='courseDetail'>
                                <div className='courseInfo'><h6>2010-Heute</h6></div>
                                <div className='courseInfo'><h4>Masterstudium: Umwelt- und Ressourcenmanagement</h4></div>
                                <div className='courseInfo'><h5>Brandenburgische Technische Universität Cottbus-Senftenberg</h5></div> 
                        </div>
                    </div>
                    <div className='course'>
                        <div className='eduLogo'>
                            <img src='' alt=''></img>
                        </div>
                        <div className='courseDetail'>
                                <div className='courseInfo'><h6>2015-2018</h6></div>
                                <div className='courseInfo'><h4>Bachelor: Wirtschaftsingieurwesen</h4></div>
                                <div className='courseInfo'><h5>Azad-Universität von Tehran,Iran</h5></div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education;