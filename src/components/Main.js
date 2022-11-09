import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import goldenRec from "../assets/goldenRec.jpg";
import Docked from "../assets/Docked.jpeg";
import Far from "../assets/Argrosy-far.jpeg";
import Discovery from "../assets/Discovery-day.jpeg"
import { Container } from "react-bootstrap";


// style={{backgroundRepeat: "no-repeat", backgroundImage: `url(${goldenRec})`, backgroundSize: ""}}

export default function Main() {
  return (
    <section>
      {/* about me container */}
      <div className=" " id="About">
        <Container className=" capImg  d-flex"  >
          <figure className="welcome">
          <img alt="goldenRecImg" src={goldenRec}/>
          <figcaption className=" ">WELCOME TO CAPTAIN HERB</figcaption> 
          </figure>
        </Container>
        {/* picture on about me picture and line break */}
        <div className="post-heading text-center justify-content-center mainPic">
          <h3 className="display-4 font-weight-bold">U.S. COAST GUARD LICENSED</h3>
        </div>
        <div className="d-flex-row flex-column justify-content-evenly" >
          <img src={Docked}  height="400px" width="300px" alt="about me pic" />
          <img src={Far}  height="400px" width="300px" alt="about me pic" />
          <img src={Discovery}  height="400px" width="300px" alt="about me pic" />
        </div>
        <hr className="w-50 mx-auto" />

        <div className=" text-center justify-content-center ">
          <div className="display-6 font-weight-bold">20 years experience </div>
          <div>Boating - Ownership - Boat Operations - Navigation - Systems - Maintainance</div>
          <div>
            <Button component={Link} to="/Services" id="Services">FIND OUT MORE</Button>
          </div>
        </div>

        

       
      </div>
    </section>
  );
}
