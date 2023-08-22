import React from "react";
import { Box, Typography} from '@mui/material'
import{Button} from '@mui/material'

const Footer = () => {
    return (
       <Box display="flex" flexDirection="column">
<Typography varient="h4" paddingTop={6} textAlign="center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
<Typography varient="div" padding={4} textAlign="center" fontSize="12px">Optimize For Any Team Size</Typography>

<Box display="flex" 
margin="auto"
justifyContent={"center"} 
padding={5}>
<Button sx={{mr:2}} variant='contained'>Try Codding fOr Free</Button>
<Button sx={{ml:2}} variant='outlined'>Talk To Sales</Button>


</Box>


       </Box>
    );
};

export default Footer;