import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




export default function Contacts() {
    return (
      <div>
          <div id="contacts" className="mt-5 pb-5">
        <div className=" post-heading text-center">
          <h3 className="display-4 font-weight-bold">Contact Me</h3>
          <hr className="w-50 mx-auto pb-2" />
        </div>
        <Box
        className='contactForm'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Name" variant="standard" />
      <TextField id="standard-basic" label="Email" variant="standard" />

    </Box>
    <Box
        className='contactMessage'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        width: 500,
        maxWidth: '100%',
      }}
      noValidate
      autoComplete="off"
    >
     <TextField id="standard-basic" label="Message" variant="standard" fullWidth multiline rows={6} />

    </Box>
        </div>
      </div>
    );
  }