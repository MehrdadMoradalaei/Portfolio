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
               <div className="description">
                  <h4>Junior Software Developer</h4>
                  <h1>Mehrdad Moradalaei</h1>
                  <p>I am a person who follows his dreams and his interests. Sometimes your second favorite career is so attractive that it makes you change your whole world. In my case, "Programing" has changed my world</p>

               </div>
            </div>

       </div>
    );
}
export default Billboard;