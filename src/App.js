import "./App.css";
import Main from "./components/Main";
import Services from './components/Services'
import About from "./components/About";
import Contact from "./components/Contact";
import BasicMenu from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";




function App() {
  console.log(window.location)
 
  return (
    
    <div className="App">
      
     <BasicMenu />
     <main >
      <ScrollToTop />
     <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
     
     </Routes>
     </main>
     <Footer></Footer>
    </div>
  );
}

export default App;
