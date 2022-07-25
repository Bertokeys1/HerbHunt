import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from 'react';

function App() {
  const [pageRender, setPageRender] = useState("about");
  function ConditionalRender() {
    switch (pageRender) {
      case "about":
        return <Main />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;

      default:
        return '';
    }
  }
  return (
    <div className="App">
     <Navbar 
     pageRender={pageRender}
     setPageRender={setPageRender}/>
     <ConditionalRender />
    </div>
  );
}

export default App;
