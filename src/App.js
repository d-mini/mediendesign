import './App.css';
import NavBar from './components/NavBar';
import { useInView } from "react-intersection-observer";
import Galery from './components/Galery';
import Footer from './components/Footer';

import samgyeopsal0 from './images/samgyeopsal_cut.jpg';
import samgyeopsal1 from './images/samgyeopsal.jpg';
import porkBelly from './images/porkBelly.jpg';
import ssam from './images/ssam.webp';
import bokkeumBap from './images/bokkeumBap.jpg';
import doenjang from './images/doenjang.jpg';

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

  const color = () => {
    if (startInView) {
      return 'transparent';
    }
    if (section1InView) {
      return 'green';
    }
    if (section2InView) {
      return 'red';
    }
    if (section3InView) {
      return 'green';
    }
  };

  return (
    <div className='app'>
      <NavBar activeSection={activeSection()} color={color()}></NavBar>
      <img id='main-img' ref={start} src={samgyeopsal0} alt='' />

      <div id='about' ref={section1} className='section'>
        <div className='section__content'>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className='section-color'>
          <div className='section__content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>   
          </div>
        </div>
      </div>

      <div id='ingredients' ref={section2} className='section'>
        <img className='section__image' src={samgyeopsal1} alt='' />

        <div className='section__content flex-row'>
          <img className='image-shadow' src={porkBelly} alt='' />
          <div className='flex-column'>
            <h1>Ingredients</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className='section-color-right'>
          <div className='section__content'>
            <h2>Test</h2>
            <Galery></Galery>
          </div>
        </div>

        <div className='section-color-left'>
          <div className='section__content'>
            <h2>Test</h2>
            <Galery></Galery>
          </div>
        </div>
      </div>

      <div id='howto' ref={section3} className='section'>
        <div className='section__content'>
          <div className='flex-row'>
            <img className='image-shadow' src={ssam} alt='' />
            <div className='flex-column'>
              <h1>How to eat</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className='section-color'>
          <div className='section__content flex-row'>
            <img src={bokkeumBap} alt='' />
            <img src={doenjang} alt='' />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
