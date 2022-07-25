import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import compass from '../assets/compass.png'

export default function BasicMenu() {

    // compass button function 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    // compass button image control
    <div className='d-flex justify-content-between'>
        <h1 className='mainName ext-start'>Herb Hunt</h1>
      <Button
        className=''
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
            <img src={compass} height="100px" style={{bordeRadius: "50%"}} alt="compass me pic"/>    
        
      </Button>

      {/* menu items */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        <MenuItem onClick={handleClose}>Curriculum Vitae</MenuItem>
      </Menu>
    </div>
  );
}
