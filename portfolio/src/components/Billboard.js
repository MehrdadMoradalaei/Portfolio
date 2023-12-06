import "./Billboard.css";
import cvPic from "../assets/cvPic.jpg"

function Billboard(){
    return(
       <div className="container">
            <div className="leftSide">
                 <div className="title">Mehrdad Moradalaei</div>
                 <div>
                    <img src={cvPic} className="img" alt=""></img>
                 </div>
            </div>
            <div className="rightSide">
            </div>

       </div>
    );
}
export default Billboard;