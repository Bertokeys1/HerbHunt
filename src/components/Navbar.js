import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import compass from "../assets/compass.png";
import { Link } from "react-router-dom";

export default function BasicMenu() {

  // compass menu drop-down variables
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Closes drop down when a selection is made
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    

    // header home button and compass menu
    <div className="d-flex justify-content-between">

      {/* Header home button */}
      <Link
        to="/"
        anchorEl={anchorEl}
        open={open}
        underline='none'
        color={"inherit"}
        className="mainName ext-start"
        href="About"
        id="aboutMe"
        onClick={handleClose}
      >
      Herb Hunt
      </Link>

      {/* compass menu drop-down */}
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          src={compass}
          height="100px"
          style={{ bordeRadius: "50%" }}
          alt="compass me pic"
        />
      </Button>

      {/* menu items */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem component={Link} to="/" id="About" onClick={handleClose}>
          About Me  
        </MenuItem>
        <MenuItem component={Link} to="/Services" id="Services" href="services" onClick={handleClose}>
          Services
        </MenuItem>
        <MenuItem component={Link} to="projects" id="Projects" onClick={handleClose}>
          Projects
        </MenuItem>
        <MenuItem component={Link} to="contact" id="Contact" onClick={handleClose}>
          Contact
        </MenuItem>
        <MenuItem to="cv" id="cv" onClick={handleClose}>
          Curriculum Vitae
        </MenuItem>
      </Menu>
    </div>
  );
}
