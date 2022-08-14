import './App.css';
import { useInView } from "react-intersection-observer";
import NavBar from './components/NavBar';
import About from './components/About';
import Ingredients from './components/Ingredients';
import HowTo from './components/HowTo';
import Footer from './components/Footer';

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
      <img id='main-img' ref={start} src={samgyeopsal} alt='' />

      <div id='about' ref={section1}>
        <About></About>
      </div>

      <div id='ingredients' ref={section2}>
        <Ingredients></Ingredients>
      </div>

      <div id='howto' ref={section3}>
        <HowTo ></HowTo>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
