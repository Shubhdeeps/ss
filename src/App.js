import './stylesheet/App.css'
import Canvas from "./components/Canvas";
import SectionOne from './components/sections/SectionOne';
import { useScrolling } from './utils/scrolling';
import SectionThree from './components/sections/SectionThree';
import SectionFour from './components/sections/SectionFour';
import SectionFive from './components/sections/SectionFive';
import EmptySection from './components/sections/EmptySection';





function App() {

  const [scroll] = useScrolling()
 console.log(scroll)

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
