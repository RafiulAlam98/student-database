import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';



const Login = () => {
     const [loginData, setLoginData] = useState({})
     const {user,userSignIn,isLoading, error,userSignOut} = useAuth()
     const history = useHistory()
     
     const handleOnBlur = e =>{
          const field = e.target.name
          const value = e.target.value
          const newLoginData = {...loginData}
          newLoginData[field] = value
          console.log(newLoginData)
          setLoginData(newLoginData)
     }

     const handleSubmit = e =>{
          userSignIn(loginData.email,loginData.password,history)
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
                                             Login to your account
                                        </Typography>
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
                         }
                         {
                              isLoading && <CircularProgress />
                         }
                         {
                              user?.email && <Alert sx={{m:1}} variant="outlined" severity="success">
                                                  User login successfully
                                             </Alert>
                         }
                         {
                              error && <Alert variant="outlined" severity="error">
                                             {error}
                                        </Alert>
                         }
                         <Button 
                              sx={{width:'50%',m:2}}
                              variant="contained"
                              type="submit"
                              onClick={userSignOut}
                              >Sign Out
                         </Button>
                    </Grid>
               </Grid>
          </Container>
     );
};

export default Login;