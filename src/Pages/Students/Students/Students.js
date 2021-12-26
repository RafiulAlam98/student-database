import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import {
     Switch,
     Route,
     Link,
     useRouteMatch
   } from "react-router-dom";
import ViewStudents from '../ViewStudents/ViewStudents';
import AddStudent from '../AddStudent/AddStudent';

const drawerWidth = 200;

function Students(props) {
     let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
     <Typography sx={{mt:3, color:'red'}} variant="h6" noWrap component="div">
            LEAD LOGO
     </Typography>
     <Toolbar />
    

     <List sx={{mt:10,}}>
          <Link exact to='/students'  style={{textDecoration:'none'}}>
               <Button color='inherit' sx={{mb:2}}>
                    Students
               </Button>
          </Link>
          <Link to={`${url}/viewStudents`} style={{textDecoration:'none'}}>   
               <Button color='inherit'sx={{mb:2}}>
                    - View Students
               </Button>
          </Link>
          <Link to={`${url}/addStudent`} style={{textDecoration:'none'}}>   
               <Button color='inherit'sx={{mb:2}}>
                    - Add Student
               </Button>
          </Link>
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          
          <Grid container spacing={2}>
          {/* nested route */}
               <Grid item xs={12} md={12}>
                    <Switch>
                         <Route path={`${path}/viewStudents`}>
                              <ViewStudents></ViewStudents>
                         </Route>
                         <Route path={`${path}/addStudent`}>
                              <AddStudent></AddStudent>
                         </Route>
                    </Switch>
               </Grid>
          </Grid>
        </Typography>
      </Box>
    </Box>
  );
}

Students.propTypes = {

  window: PropTypes.func,
};

export default Students;
