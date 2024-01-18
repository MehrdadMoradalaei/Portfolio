import './App.css';
import './components/Billboard';
import Billboard from './components/Billboard';
import Intro from './components/Intro';
import Skill from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div>
      <Billboard/>
      <Intro/> 
      <Skill/>
      <Education/>
    </div>
  
  );
}

export default App;
