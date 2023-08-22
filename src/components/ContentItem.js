import React from "react";
import { Box, Typography } from '@mui/material';

const ContentItem = ({ title, description, img ,swap}) => {
    return(
        <Box  bgcolor={!swap&&"#fff"} 
        display="flex"
         padding={10}
        justifyContent="space-between"
        alignItems="center" >

       { swap?( <>
         <Box>
        
            <Typography color="#734905" padding={3} varient='h1' fontSize="30px" >
                {title}
            </Typography>
            <Typography padding={3} varient='caption'>
                {description}
            </Typography>
        </Box>
        <img src={img} alt={title}
         loading="lazy"
          width="30%"
           style={{boxShadow:"10px 20px 10px #ccc",
            marginLeft:"10%",
             borderRadius:20,
             }}
             height="300px"
             />{""}
             </> 
             ):(

             <> 
              <img src={img} alt={title}
             loading="lazy"
              width="30%"
               style={{boxShadow:"10px 20px 10px #ccc",
                marginLeft:"10%",
                 borderRadius:20,
                 }}
                 height="300px"
                 />{""}

             <Box>
             <Typography color="#734905" padding={3} varient='h1' fontSize="30px">
                 {title}
             </Typography>
             <Typography padding={3} varient='caption'>
                 {description}
             </Typography>
         </Box>
        </> 
       )}
    </Box>
    );
    
}



export default ContentItem;