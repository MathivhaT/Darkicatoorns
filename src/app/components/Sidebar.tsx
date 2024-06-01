import React from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from '@mui/icons-material/BarChart';

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      color="#87787A"
      sx={{
        backgroundColor:'#87787A',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [`& .MuiDrawer-paper`]: {
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center vertically
          alignItems: "center", // Center horizontally
        },
      }}
    >
   <div  style={{backgroundColor:'#87787A'}} className=" w-full absolute h-full  rounded text-grey-500  text-5xl p-2" ></div>

   <Box  className=" w-12 h-12 fixed top-5 bg-gray-100 hover:bg-gray-500 rounded text-grey-500  text-5xl p-2"  />

<List className="w-full mt-8">
  <ListItem  className=" flex justify-center">
    <ListItemIcon >
      <HomeIcon className=" hover:bg-gray-500 hover:rounded text-white text-5xl p-2" />
    </ListItemIcon>
  </ListItem>
  <ListItem  className="flex justify-center ">
    <ListItemIcon>
      <BuildIcon className=" hover:bg-gray-500 hover:rounded text-white text-5xl p-2"  />
    </ListItemIcon>
  </ListItem>
  <ListItem  className=" flex justify-center">
    <ListItemIcon>
      <AssessmentIcon  className=" hover:bg-gray-500 hover:rounded   text-white text-5xl p-2"  />
    </ListItemIcon>
  </ListItem>
  <ListItem  className=" flex justify-center">
    <ListItemIcon>
      <BarChartIcon className=" hover:bg-gray-500 hover:rounded  text-white text-5xl p-2"  />
    </ListItemIcon>
  </ListItem>

</List>
<SettingsIcon  className=" fixed bottom-5 bg-gray-100 hover:bg-gray-500 rounded-full hover:text-white  text-5xl p-2"  />

   
    
    </Drawer>
  );
};

export default Sidebar;
