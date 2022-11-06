import './App.css';
import Header from './components/header';
import Bio from './components/Bio';
import Contact from './components/contact';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  return (
    <div>
      <Header />
      <Bio id="home" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
