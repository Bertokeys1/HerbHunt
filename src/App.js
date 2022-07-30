import "./App.css";
import Main from "./components/Main";
import Services from './components/Services'
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from 'react';
import BasicMenu from "./components/Navbar";

function App() {
  const [pageRender, setPageRender] = useState("about");
  function ConditionalRender() {
    switch (pageRender) {
      case "about":
        return <Main />;
      case "Services":
        return <Services />;
      case "Projects":
        return <Projects />;
      case "contact":
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
    </div>
  );
}

export default App;
