import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const AddStudent = () => {
          const [studentInfo, setStudentInfo] = useState({})

          const handleOnBlur = e =>{
               const field = e.target.name
               const value = e.target.value
               const newRegisterData = {...studentInfo}
               newRegisterData[field] = value
               console.log(newRegisterData)
               setStudentInfo(newRegisterData)
          }


          const handleSubmit = e =>{
               
               e.preventDefault()
          }
     return (
          <Container>
               <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                         <Typography variant='h5' sx={{m:2}}>
                              Add Student
                         </Typography>
                         <form onSubmit={handleSubmit}>
                              <TextField
                                   required
                                   id="outlined-required"
                                   label="Full Name"
                                   sx={{width:'75%', mb:3}}
                                   onBlur={handleOnBlur}
                                   name="name"
                              />
                              <br/>
                              <TextField
                                   required
                                   id="outlined-required"
                                   label="Date Of Birth"
                                   sx={{width:'75%',mb:3}}
                                   onBlur={handleOnBlur}
                                   name="birth"
                              />
                              <br/>
                              <TextField
                                   required
                                   id="outlined-required"
                                   label="School"
                                   sx={{width:'75%',mb:3}}
                                   onBlur={handleOnBlur}
                                   name="school"
                              />
                              <br/>
                              <TextField
                                   required
                                   id="outlined-required"
                                   label="Class"
                                   sx={{width:'75%',mb:3}}
                                   onBlur={handleOnBlur}
                                   name="class"
                              />
                              <br/>
                              <TextField
                                   required
                                   id="outlined-required"
                                   label="Division"
                                   sx={{width:'75%',mb:3}}
                                   onBlur={handleOnBlur}
                                   name="division"
                              />
                              <br/>
                              <TextField
                                   required
                                   id="outlined-required"
                                   label="Status"
                                   sx={{width:'75%',mb:3}}
                                   onBlur={handleOnBlur}
                                   name="status"
                              />
                              <br/>
                              <Button type='submit' variant='contained' sx={{width:'50%'}}>
                                   Save
                              </Button>
                         </form>
                    </Grid>
               </Grid>
          </Container>
     );
};

export default AddStudent;