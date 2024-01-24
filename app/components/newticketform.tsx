import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './globals.css'

export function newticketform() {
  return (
    <div id="container">
   
      <div id="mainform">
        <div id="title">
          <h1>Nuovo Ticket</h1>
          <h2>Crea un nuovo ticket di assistenza</h2>
        </div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          autoComplete="on"
        >
          <TextField id="outlined-basic" label="ID Cliente" variant="outlined" />
          <TextField id="outlined-basic" label="Nome" variant="outlined" />
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          autoComplete="on"
        >
          <TextField id="outlined-basic" label="Telefono" variant="outlined" />
          <TextField id="outlined-basic" label="E-Mail di contatto" variant="outlined" />
        </Box>
        </div>

    </div>
  );
}