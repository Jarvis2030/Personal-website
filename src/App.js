import logo from './logo.svg';
import {NavBar} from './components/navbar';
import {Banner} from './components/Banner';
import './css/Banner.css';
import './css/Navbar.css';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
 </div>
  );
}

export default App;
