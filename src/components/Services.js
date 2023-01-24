import Maverick from "../assets/Maverick.jpg"
import Sail from "../assets/Sail.jpg"
import Docks from "../assets/Docks.jpeg"
import Malibu from "../assets/Malibu-docked.jpeg"
import Docked from "../assets/Offshore.jpeg"
import Wheel from "../assets/Wheel.jpeg"
import { Button } from "@mui/material"
import { Link } from "react-router-dom";


export default function Services() {
  return (
    <div>
      <div id="" className="mt-5 pb-5">
        <div className="post-heading text-center">
          <div className="display-4 font-weight-bold">Services</div>
          <hr className="w-50 mx-auto pb-2" />
        </div>
      <div className="serviceItems" >
          <div >
            <div className="serviceText">Captain For Hire</div>
          <img src={Sail}  height="270px" width="300px" alt="about me pic" />
            <li>Allowing Boat owners to enjoy a worry free voyage</li>
          </div>
          <div >
            <div className="serviceText">Boat Relocation</div>
          <img src={Maverick}  height="270px" width="300px" alt="about me pic" />
            <div>Primary area: Western USA</div>
            <li>Seasonal relocation</li>
            <li>With or without oner aboard</li>
          </div>
          <div>
            <div className="serviceText">Relief Captain</div>
          <img src={Docks}  height="270px" width="300px" alt="about me pic" />
            <li>Professional Captain onboard to assist with travel or relocation</li>
          </div>
        </div>

        <div className="serviceItems" >
          <div >
            <div className="serviceText">Captain For Hire</div>
          <img src={Malibu}  height="270px" width="300px" alt="about me pic" />
            <li>Allowing Boat owners to enjoy a worry free voyage</li>
          </div>
          <div >
            <div className="serviceText">Boat Relocation</div>
          <img src={Docked}  height="270px" width="300px" alt="about me pic" />
            <div>Primary area: Western USA</div>
            <li>Seasonal relocation</li>
            <li>With or without oner aboard</li>
          </div>
          <div>
            <div className="serviceText">Relief Captain</div>
          <img src={Wheel}  height="270px" width="300px" alt="about me pic" />
            <li>Professional Captain onboard to assist with travel or relocation</li>
          </div>
        </div>

      </div>      
      <div className="serviceContact">
      <Button component={Link} to="/Contact" id="Contact" >
        Contact Me
      </Button>
      </div>
    </div>
  );
}
