import React from "react";
import { Box } from '@mui/material';
import ContentItem from "./ContentItem";

const contentArray = [
    {
        title: "Get Things Done",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        img: "/1.jpg"
    },
    {
        title: "Productivity",
        description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
        img: "/2.jpg"
    },
    {
        title: "Fast Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        img: "/3.jpg"
    },

];
const Content = () => {
    return (
        <Box bgcolor="#fbf2f2" display="flex"
            justifyContent={"center"}
            flexDirection="column"
            fontSize="50"
            width="100%"
            height="10%">
                {contentArray.map((cont,index)=>(<ContentItem 
                title={cont.title} 
                description={cont.description} 
                img={cont.img} 
                key={index}
                swap={index%2==0}
                />))}

        </Box>
    );
};

export default Content;