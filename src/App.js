import "./App.css";
import Main from "./components/Main";
import Services from './components/Services'
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from 'react';
import BasicMenu from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  console.log(window.location)
  const [pageRender, setPageRender] = useState("About");
  function ConditionalRender() {
    switch (pageRender) {
      case "About":
        return <Main />;
      case "Services":
        return <Services />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;

      default:
        return '';
    }
  }
  return (
    <div className="App">
     <BasicMenu 
     pageRender={pageRender}
     setPageRender={setPageRender}/>
     <ConditionalRender />
     <Footer></Footer>
    
    </div>
  );
}

export default App;
