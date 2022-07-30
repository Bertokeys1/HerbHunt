import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import compass from "../assets/compass.png";

export default function BasicMenu(props) {

  // compass menu drop-down function
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // function to render menu item sections to page
  const handleClose = (event) => {
    const id = event.target.id;
    props.setPageRender(id);
    setAnchorEl(null);
  };

  return (
    
    // header home button and compass menu
    <div className="d-flex justify-content-between">

      {/* Header home button */}
      <h1
        anchorEl={anchorEl}
        open={open}
        className="mainName ext-start"
        href="#about"
        id="about"
        onClick={handleClose}
      >
      Herb Hunt
      </h1>

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
        <MenuItem href="#services" id="services" onClick={handleClose}>
          Services
        </MenuItem>
        <MenuItem href="#projects" id="projects" onClick={handleClose}>
          Projects
        </MenuItem>
        <MenuItem href="#contact" id="contact" onClick={handleClose}>
          Contact
        </MenuItem>
        <MenuItem href="#cv" id="cv" onClick={handleClose}>
          Curriculum Vitae
        </MenuItem>
      </Menu>
    </div>
  );
}
