import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import compass from "../assets/compass.png";
import { Link } from "@mui/material";

export default function BasicMenu(props) {

  // compass menu drop-down variables
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Variable to render menu item sections to page
  const handleClose = (event) => {
    const id = event.target.id;
    props.setPageRender(id);
    setAnchorEl(null);
  };

  return (
    
    // header home button and compass menu
    <div className="d-flex justify-content-between">

      {/* Header home button */}
      <Link
        to="/About"
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
        className=""
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
        <MenuItem href="/About" id="About" onClick={handleClose}>
          About Me  
        </MenuItem>
        <MenuItem  href="/Services" id="Services" onClick={handleClose}>
          Services
        </MenuItem>
        <MenuItem href="projects" id="Projects" onClick={handleClose}>
          Projects
        </MenuItem>
        <MenuItem href="contact" id="Contact" onClick={handleClose}>
          Contact
        </MenuItem>
        <MenuItem href="cv" id="cv" onClick={handleClose}>
          Curriculum Vitae
        </MenuItem>
      </Menu>
    </div>
  );
}
