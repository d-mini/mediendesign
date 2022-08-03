import './App.css';
import NavBar from './components/NavBar';
import { useInView } from "react-intersection-observer";

function App() {
  const [section1, section1InView] = useInView({ threshold: 0.5 });
  const [section2, section2InView] = useInView({ threshold: 0.5 });
  const [section3, section3InView] = useInView({ threshold: 0.5 });

  const color = section1InView ? "green"
    : section2InView ? "red"
    : section3InView ? "green"
    : "transparent";

  return (
    <div className='app'>
      <NavBar color={color}></NavBar>
      <img id='main-img' src={process.env.PUBLIC_URL + '/images/samgyeopsal.jpg'} alt='' />
      <div id='section1' ref={section1} className='section'><h1>Test</h1></div>
      <div id='section2' ref={section2} className='section'><h1>Test</h1></div>
      <div id='section3' ref={section3} className='section'><h1>Test</h1></div>
    </div>
  );
}

export default App;
