import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Malibu from "../assets/Malibu-2.jpeg";
import Docked from "../assets/Docked.jpeg";
import Far from "../assets/Argrosy-far.jpeg";
import Discovery from "../assets/Discovery-day.jpeg"




export default function Main() {
  return (
    <section>
      {/* about me container */}
      <div className="mt-3 " id="About">
        <div className="capImg d-flex " style={{backgroundRepeat: "no-repeat", backgroundImage: `url(${Malibu})`, backgroundSize: ""}} >
          <div className="welcome ">WELCOME TO CAPTAIN HERB</div> 
        </div>
        {/* picture on about me picture and line break */}
        <div className="post-heading text-center justify-content-center mainPic">
          <h3 className="display-4 font-weight-bold">U.S. COAST GUARD LICENSED</h3>
        </div>
        <div className="d-flex flex-row justify-content-evenly" >
          <img src={Docked}  height="400px" width="300px" alt="about me pic" />
          <img src={Far}  height="400px" width="300px" alt="about me pic" />
          <img src={Discovery}  height="400px" width="300px" alt="about me pic" />
        </div>
        <hr className="w-50 mx-auto" />

        <div className=" text-center justify-content-center ">
          <div className="display-6 font-weight-bold">15 years experience </div>
          <div>Boating - Ownership - Boat Operations - Navigation - Systems - Maintainance</div>
          <div>
            <Button component={Link} to="/Services" id="Services">FIND OUT MORE</Button>
          </div>
        </div>

        

       
      </div>
    </section>
  );
}
