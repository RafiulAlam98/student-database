import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import useAuth from './../../../hooks/useAuth/useAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';



const Register = () => {

     const {user,registerUser,isLoading, error} = useAuth()
     const [registerData, setRegisterData] = useState()
     const location = useLocation()
     const history = useHistory()


     const handleOnBlur = e =>{
          const field = e.target.name
          const value = e.target.value
          const newRegisterData = {...registerData}
          newRegisterData[field] = value
          console.log(newRegisterData)
          setRegisterData(newRegisterData)
     }

     const handleSubmit = e =>{
          
          registerUser(registerData.email, registerData.password, registerData.name, history, location)
          e.preventDefault()
     }
     return (
               <Container>
               <Grid container spacing={2}>
                    <Grid  sx={{width:'75%', mt:10}} item xs={12} md={12}>
                         

                         {
                              !isLoading && 
                             
                              <form onSubmit={handleSubmit}>
                                   <Typography variant="body1" gutterBottom>
                                        Create a new Account
                                   </Typography>
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
                              <Link style={{textDecoration:'none'}} to="/login">
                                   <Typography  variant="body1" gutterBottom>
                                        Already registered?
                                   </Typography>
                              </Link>
                         </form>
                         }
                         {
                              isLoading && <CircularProgress />
                         }
                         {
                              user?.email && <Alert sx={{m:1}} variant="outlined" severity="success">
                                                  User registered successfully
                                             </Alert>
                         }
                         {
                              error && <Alert variant="outlined" severity="error">
                                             {error}
                                        </Alert>
                         }
                    </Grid>
               </Grid>
          </Container>
     );
};

export default Register;