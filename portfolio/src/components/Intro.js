import "./Intro.css";
import introPic from "../assets/introPic.jpg";

function Intro(){
    return(
        <div className="introContainer">
            <div className="descript">
                <div className='titleDesciption'>Who Am I</div>
                <h3 style={{ padding: "30px 30px 0 30px"}}>Als hochmotivierter, selbstständiger Front-End-Entwickler verfüge ich über fundierte Kenntnisse in React, JavaScript und ein klares Verständnis von HTML/CSS. Mit meiner Kompetenz in der Anwendung populärer Frameworks wie Material UI, jQuery, Bootstrap und Tailwind sowie Erfahrung in der Verwaltung von MySQL-Datenbanken und CI/CD-Praktiken trage ich zum effizienten Entwicklungsprozess und erfolgreicher Zusammenarbeit im Team bei.</h3>
                <h3 style={{ padding: "0 30px"}}>Meine Begeisterung für kontinuierliches Lernen spiegelt sich in meinem Interesse an neuen Fähigkeiten und praktischer Erfahrung wider.</h3>
                <h3 style={{ padding: "0 30px"}}> Ich bin bestrebt, meinem Traum zu folgen und durch harte Arbeit, Liebe zum Detail und exzellente organisatorische Fähigkeiten zum Erfolg des Teams beizutragen.</h3>
            </div>
            <img src={introPic} className="pic" alt=""/>
        </div>
    )
}
export default Intro;