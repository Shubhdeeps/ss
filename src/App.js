import './stylesheet/App.css'
import Canvas from "./components/Canvas";
import SectionOne from './components/sections/SectionOne';
import SectionThree from './components/sections/SectionThree';
import SectionFour from './components/sections/SectionFour';
import SectionFive from './components/sections/SectionFive';
import EmptySection from './components/sections/EmptySection';





function App() {


  return (
    <div className="App">
        <Canvas />
        <div className="background"></div>
        <SectionOne />
        <SectionThree />
        <SectionFour />
        <EmptySection />
        <SectionFive />
    </div>
  );
}

export default App;
