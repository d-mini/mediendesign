import './App.css';
import NavBar from './components/NavBar';
import { useInView } from "react-intersection-observer";
import Galery from './components/Galery';
import Footer from './components/Footer';
import main from './images/samgyeopsal.jpg';
import samgyeopsal from './images/samgyeopsal_cut.jpg';

function App() {
  const [start, startInView] = useInView({ threshold: 0.5 });
  const [section1, section1InView] = useInView({ threshold: 0.15 });
  const [section2, section2InView] = useInView({ threshold: 0.15 });
  const [section3, section3InView] = useInView({ threshold: 0.15 });

  const activeSection = () => {
    if (startInView) {
      return 0;
    }
    if (section1InView) {
      return 1;
    }
    if (section2InView) {
      return 2;
    }
    if (section3InView) {
      return 3;
    }
  };

  const color = startInView ? "transparent"
  : section1InView ? "green"
  : section2InView ? "red"
  : section3InView ? "green"
  : "transparent";

  return (
    <div className='app'>
      <NavBar activeSection={activeSection()} color={color}></NavBar>
      <img id='main-img' ref={start} src={samgyeopsal} alt='' />
      <div id='section1' ref={section1} className='section'>
        <h1>About 삼겹살</h1>
        <div className='section__content'>
          <h2>What is 삼겹살?</h2>   
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2>More Interesting Facts</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div id='section2' ref={section2} className='section'>
        <h1>Ingredients</h1>
        <img className='section__image' src={main} alt='' />
        <div className='section__content'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Galery></Galery>
        </div>
      </div>
      <div id='section3' ref={section3} className='section'>
        <h1>How to enjoy 삼겹살?</h1>
        <div className='section__content'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
