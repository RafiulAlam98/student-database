import { Container } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const ViewStudentNavigation = () => {
     const [school, setSchool] = React.useState('');
     const [classes, setClasses] = React.useState('');
     const [division, setDivision] = React.useState('');

     const handleChange = (event) => {
          // setSchool(event.target.value);
         
     };
     return (
          <Container sx={{m:3}}>
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
                         <FormControl sx={{width:'75%'}}>
                              <InputLabel id="demo-simple-select-label">School</InputLabel>
                              <Select
                                   labelId="demo-simple-select-label"
                                   id="demo-simple-select"
                                   size='small'
                                   label="School"
                                   onChange={handleChange}
                              >
                                   <MenuItem value={10}>LEAD School</MenuItem>
                                   <MenuItem value={20}>LEAD School</MenuItem>
                                   <MenuItem value={30}>LEAD School</MenuItem>
                              </Select>
                         </FormControl>
                    </Grid>
                    <Grid item xs={12} md={2}>
                         <FormControl sx={{width:'75%'}}>
                              <InputLabel id="demo-simple-select-label">School</InputLabel>
                              <Select
                                   labelId="demo-simple-select-label"
                                   id="demo-simple-select"
                                   size='small'
                                   label="Class"
                                   onChange={handleChange}
                              >
                                   <MenuItem value={10}>3</MenuItem>
                                   <MenuItem value={20}>3</MenuItem>
                                   <MenuItem value={30}>3</MenuItem>
                              </Select>
                         </FormControl>
                    </Grid>
                    <Grid item xs={12} md={2}>
                         <FormControl sx={{width:'75%'}}>
                                   <InputLabel id="demo-simple-select-label">Division</InputLabel>
                                   <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        size='small'
                                        label="Division"
                                        onChange={handleChange}
                                   >
                                        <MenuItem value={10}>A</MenuItem>
                                        <MenuItem value={20}>A</MenuItem>
                                        <MenuItem value={30}>A</MenuItem>
                                   </Select>
                         </FormControl>
                    </Grid>
                    <Grid item xs={12} md={2}>
                         <Button variant='contained' size="small">Search</Button>
                    </Grid>
               </Grid>
          </Container>
     );
};

export default ViewStudentNavigation;