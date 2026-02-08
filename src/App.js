import logo from './logo.svg';
import {NavBar} from './components/navbar';
import {Banner} from './components/Banner';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import './css/Banner.css';
import './css/Navbar.css';
import './css/App.css';
import './css/Skills.css'
import './css/Project.css'
import './css/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Projects/>
     <Skills/>
     <Footer/>
 </div>
  );
}

export default App;
