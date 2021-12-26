import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import useAuth from './../../../hooks/useAuth/useAuth';


const Register = () => {

     // const {registerUser} = useAuth()

     const [registerData, setRegisterData] = useState()
     const handleOnBlur = e =>{
          const field = e.target.name
          const value = e.target.value
          const newRegisterData = {...registerData}
          newRegisterData[field] = value
          console.log(newRegisterData)
          setRegisterData(newRegisterData)
     }

     const handleSubmit = e =>{
          console.log(registerData.email,registerData.password)
          // registerUser(registerData.email,registerData.password)
          e.preventDefault()
     }
     return (
               <Container>
               <Grid container spacing={2}>
                    <Grid  sx={{width:'75%', mt:10}} item xs={12} md={12}>
                         <Typography variant="body1" gutterBottom>
                              Create a new Account
                         </Typography>
                         <form onSubmit={handleSubmit}>
                              <TextField
                                   required
                                   id="outlined-required"
                                   label="Enter Your Name"
                                   sx={{width:'75%',m:1}}
                                   onBlur={handleOnBlur}
                                   name="name"
                                   helperText="Your name"
                              />
                              <TextField
                                   required
                                   id="outlined-required"
                                   label="Email"
                                   sx={{width:'75%',m:1}}
                                   onBlur={handleOnBlur}
                                   name="email"
                                   helperText="Email ID / Phone Number"
                              />
                              <TextField
                                   required
                                   id="outlined-password-input"
                                   label="Password"
                                   type="password"
                                   name="password"
                                   onBlur={handleOnBlur}
                                   autoComplete="current-password"
                                   sx={{width:'75%',m:1}}
                                   helperText="Password"
                              />
                              <Button 
                                   sx={{width:'50%',m:2}}
                                   variant="contained"
                                   type="submit"
                                   >Login
                              </Button>
                         </form>
                    </Grid>
               </Grid>
          </Container>
     );
};

export default Register;