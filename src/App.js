import './App.css';
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import TechStack from "./components/TechStack/TechStack";
import Industries from "./components/Industries/Industries";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">

      <Header/>
    
      <Intro/>

      <TechStack/>

      <Services/>

      <Industries/>

      <AboutUs/>

      <Footer/>

    </div>
  );
}

export default App;
