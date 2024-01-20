import './App.css';
import './components/Billboard';
import Billboard from './components/Billboard';
import Intro from './components/Intro';
import Skill from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project'

function App() {
  return (
    <div>
      <Billboard/>
      <Intro/> 
      <Skill/>
      <Education/>
      <Experience/>
      <Project/>
    </div>
  
  );
}

export default App;
