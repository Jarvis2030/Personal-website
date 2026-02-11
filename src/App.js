import logo from './logo.svg';
import {NavBar} from './components/navbar';
import {Banner} from './components/Banner';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { ProjectDetail } from './components/projectDetail'; 
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import './css/Banner.css';
import './css/Navbar.css';
import './css/App.css';
import './css/Skills.css'
import './css/Project.css'
import './css/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';

function Home(){
  return(
    <div className="Home">
    <Banner/>
    <Projects/>
    <Skills/>
</div>
  )
}

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />

      <Routes>
        {/* 主頁 */}
        <Route path="/" element={<Home />} />

        {/* 專案內頁 */}
        <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>

      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
