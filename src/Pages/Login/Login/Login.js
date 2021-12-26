import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



const Login = () => {
     const [loginData, setLoginData] = useState({})

     
     const handleOnBlur = e =>{
          const field = e.target.name
          const value = e.target.value
          const newLoginData = {...loginData}
          newLoginData[field] = value
          console.log(newLoginData)
          setLoginData(newLoginData)
     }

     const handleSubmit = () =>{
          
     }
     return (
          <Container>
               <Grid container spacing={2}>
                    <Grid  sx={{width:'75%', mt:10}} item xs={12} md={12}>
                         <Typography variant="body1" gutterBottom>
                              Login to your account
                         </Typography>
                         <form onSubmit={handleSubmit}>
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
                              <Link style={{textDecoration:'none'}} to="/register">
                                   <Typography  variant="body1" gutterBottom>
                                        Not an Account? Register
                                   </Typography>
                              </Link>
                         </form>
                    </Grid>
               </Grid>
          </Container>
     );
};

export default Login;