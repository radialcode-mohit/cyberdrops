import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Header from "./components/Header";
import OurMission from "./components/OurMission";
import Partners from "./components/Partners";
import OurAlgos from "./components/OurAlgos";
import WhatWeDo from "./components/WhatWeDo";
import HowItWorks from "./components/HowItWorks";
import MeetTheTeam from "./components/MeetTheTeam";
import AccordianSection from "../src/components/AccordianSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Roadmap from "./components/Roadmap";
function App() {
  return (
    <div className="App">
      <Header />
      <OurMission />
      <Partners />
      <OurAlgos />
      <WhatWeDo />
      <HowItWorks />
      <MeetTheTeam />
      <Roadmap />
      <AccordianSection />
    </div>
  );
}

export default App;
