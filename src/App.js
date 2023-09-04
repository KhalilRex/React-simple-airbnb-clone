import './App.css';
import About from './Components/About';
import CardBody from './Components/CardBody';
import Header from './Components/Header';
import HeroComponent from './Components/HeroComponent';
import {
  BrowserRouter as Router, // Import BrowserRouter with an alias
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div><Header title={'Airbnb'} />
        <Routes>
          <Route exact path='/' element={<HeroComponent />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
