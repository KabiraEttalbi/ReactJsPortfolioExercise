import './App.css';
import AboutMe from './Components/AboutMe';
import Experiences from './Components/Experiences';
import Header from './Components/Header';
import Skills from './Components/Skills'
import Projects from './Components/Projects';
import Footer from './Components/Footer'
import myImage from './assets/images/me.jpg'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe image = {myImage} name = "ETTALBI Kabira"/>
      <Skills />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
