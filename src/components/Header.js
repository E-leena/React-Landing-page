import React from 'react';
import { AppBar, Button, Link, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';
import { Box } from '@mui/system';

const links = ["Home", "About", "Services", "Contact"]
const Header = () => {
  return (
    <div>
      <AppBar sx={{ bgcolor: "transparent", boxShadow: "0", position:"sticky" }}>
        <Toolbar>
          <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
            <ApiIcon sx={{ color: "black", fontSize:"20px" }} />
            <Box>
              <Tabs component={Link} sx={{ textDecoration: "none" }}>
                {links.map((link, index) => (
                  <Tab sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
              
                    ":hover": {
                      textDecoration: "underline ",
                      textUnderlineOffset: "5px"
                    }
                  }} key={index} label={link}
                  />
                ))}
              </Tabs>
            </Box>
            <Box display="flex" marginLeft={"auto"}>
              <Button sx={{ mr: 2 }} variant='outlined'>Talk To Us</Button>
              <Button sx={{ ml: 2 }} variant='contained'>Try For Free</Button>
            </Box>
          </Box>
        </Toolbar>
        <Box width="100%" height="100vh">
          <video width={"100%"} height="50%"
            autoPlay
            loop
            muted
            playsInline
            src="/5.1 video.mp4"></video>
            <Box display="flex" width="100%">
          <Typography margin="auto" variant="h4" color="black" textAlign={"center"}>Build Your Software Free Hassels Free And Top Notch Quality</Typography>
        </Box>
          <Box width="100%" 
          display="flex"
           justifyContent={"center"}
           margin="auto"
            marginTop={"5"}>
          <Button variant='outlined'sx={{m:3}}>Signup With Email</Button>
          <Button variant='contained'sx={{m:3}}>Signup with google</Button>

        </Box>
        </Box>
        

      
      </AppBar>
    </div>
  );
}

export default Header;
