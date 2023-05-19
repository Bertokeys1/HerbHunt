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
    <div id="Services">
      <div  className="mt-5 pb-5">
        <div className="post-heading text-center">
          <div className="display-4 font-weight-bold">Services</div>
          <hr className="w-50 mx-auto pb-2"/>
        </div>
      <div className="serviceItems" >
          <div className="serviceBlocks">
            <div className="serviceText">Captain for hire</div>
          <img src={Sail}  height="270px" width="300px" alt="about me pic" />
            <li>Enjoy a worry free voyage for boat owners</li>
          </div>
          <div className="serviceBlocks">
            <div className="serviceText">Boat relocation</div>
          <img src={Maverick}  height="270px" width="300px" alt="about me pic" />
            <div>Primary area: Western USA</div>
            <li>Seasonal relocation</li>
            <li>With or without owner aboard</li>
          </div>
          <div className="serviceBlocks">
            <div className="serviceText">Racing/Competitive Sailing</div>
          <img src={Docks}  height="270px" width="300px" alt="about me pic" />
            <li>Drive and communicate with crew to keep vessel moving fast</li>
          </div>
        </div>

        <div className="serviceItems" >
          <div className="serviceBlocks">
            <div className="serviceText">Owner Maintenence consultation</div>
          <img src={Malibu}  height="270px" width="300px" alt="about me pic" />
            <li>Establishing regular maintenence routines and schedule</li>
            <li>Training for DYI preventative maintenence</li>
          </div>
          <div className="serviceBlocks">
            <div className="serviceText">Trip planing</div>
          <img src={Docked}  height="270px" width="300px" alt="about me pic" />
            <li>Consult with an experienced captain to review a trip and boat management</li>
          </div>
          <div className="serviceBlocks">
            <div className="serviceText">Relief Captain</div>
          <img src={Wheel}  height="270px" width="300px" alt="about me pic" />
            <li>Professional Captain onboard to assist with travel or relocation</li>
          </div>
        </div>

      </div>      
      <div className="serviceContact">
      <Button component={Link} to="/Contact"  >
        Contact Me
      </Button>
      </div>
    </div>
  );
}
