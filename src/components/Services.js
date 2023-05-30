import Maverick from "../assets/Maverick.jpg";
import Sail from "../assets/Sail.jpg";
import Docks from "../assets/Docks.jpeg";
import Malibu from "../assets/Malibu-docked.jpeg";
import Docked from "../assets/Offshore.jpeg";
import Wheel from "../assets/Wheel.jpeg";
import { Link } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 365,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Services() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="Services">
      <div className="mt-5 pb-5">
        <div className="post-heading text-center">
          <div className="display-4 font-weight-bold">Services</div>
          <hr className="w-50 mx-auto pb-2" />
        </div>
        <div className="serviceItems">
          <div className="serviceBlocks">
            <div className="serviceText">Captain for hire</div>
            <img src={Sail} height="270px" width="300px" alt="about me pic" />
            <li>Enjoy a worry free voyage for boat owners</li>
          </div>
          <div className="serviceBlocks">
            <div className="serviceText">Racing/Competitive Sailing</div>

            {/* modal for photo gallery */}
            <Button onClick={handleOpen}>
              <img
                src={Maverick}
                height="270px"
                width="300px"
                alt="about me pic"
              />
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/* photos */}
              <Box sx={style}>
                <img
                  src={Docks}
                  height="270px"
                  width="300px"
                  alt="about me pic"
                />
              </Box>
            </Modal>

            <li>Drive and communicate with crew to keep vessel moving fast</li>
          </div>
          <div className="serviceBlocks">
            <div className="serviceText">Boat relocation</div>
            <img src={Docks} height="270px" width="300px" alt="about me pic" />
            <div>Primary area: Western USA</div>
            <li>Seasonal relocation</li>
            <li>With or without owner aboard</li>
          </div>
        </div>

        <div className="serviceItems">
          <div className="serviceBlocks">
            <div className="serviceText">Owner Maintenence consultation</div>
            <img src={Malibu} height="270px" width="300px" alt="about me pic" />
            <li>Establishing regular maintenence routines and schedule</li>
            <li>Training for DYI preventative maintenence</li>
          </div>
          <div className="serviceBlocks">
            <div className="serviceText">Trip planing</div>
            <img src={Docked} height="270px" width="300px" alt="about me pic" />
            <li>
              Consult with an experienced captain to review a trip and boat
              management
            </li>
          </div>
          <div className="serviceBlocks">
            <div className="serviceText">Relief Captain</div>
            <img src={Wheel} height="270px" width="300px" alt="about me pic" />
            <li>
              Professional Captain onboard to assist with travel or relocation
            </li>
          </div>
        </div>
      </div>
      <div className="serviceContact">
        <Button component={Link} to="/Contact">
          Contact Me
        </Button>
      </div>
    </div>
  );
}
