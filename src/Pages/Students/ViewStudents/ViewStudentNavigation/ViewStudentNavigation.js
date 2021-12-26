import { Container } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


const ViewStudentNavigation = () => {
     const [school, setSchool] = React.useState('');
     const [classes, setClasses] = React.useState('');
     const [division, setDivision] = React.useState('');

     const handleChange = (event) => {
          setSchool(event.target.value);
         
     };
     return (
          <Container>
               <Grid container spacing={2}>
                    <Grid item xs={12} md={2}>
                         <TextField
                              label="Name"
                              id="outlined-size-small"
                              size="small"
                         />
                    </Grid>
                    <Grid item xs={12} md={2}>
                         <TextField
                              label="Age"
                              id="outlined-size-small"
                              size="small"
                         />
                    </Grid>
                    <Grid item xs={12} md={2}>
                         <Select
                              id="demo-simple-select"
                              value={school}
                              label="School"
                              size='small'
                              defaultValue='School'
                              onChange={handleChange}
                              
                         >
                              <MenuItem>LEAD School </MenuItem>
                              <MenuItem>LEAD School </MenuItem>
                              <MenuItem>LEAD School </MenuItem>
                         </Select>
                    </Grid>
                    <Grid item xs={12} md={2}>
                         <Select
                                   id="demo-simple-select"
                                   value={classes}
                                   label="Class"
                                   size='small'
                                   onChange={handleChange}
                              >
                                   <MenuItem>3</MenuItem>
                                   <MenuItem>4</MenuItem>
                                   <MenuItem>5</MenuItem>
                         </Select>
                    </Grid>
                    <Grid item xs={12} md={2}>
                    <Select
                              id="demo-simple-select"
                              value={division}
                              label="Division"
                              size='small'
                              onChange={handleChange}
                              
                         >
                              <MenuItem value={10}>A</MenuItem>
                              <MenuItem value={20}>A</MenuItem>
                              <MenuItem value={30}>A</MenuItem>
                         </Select>
                    </Grid>
                    <Grid item xs={12} md={2}>
                         <Button variant='contained' size="small">Small</Button>
                    </Grid>
               </Grid>
          </Container>
     );
};

export default ViewStudentNavigation;