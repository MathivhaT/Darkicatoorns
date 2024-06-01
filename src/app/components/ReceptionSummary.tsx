"use client";
import React, { useEffect, useState } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { fetchReceptionSummary } from "../services/dataService";
import BuildIcon from "@mui/icons-material/Build";
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

const ReceptionSummary: React.FC = () => {
  const [receptionSummaryData, setReceptionSummaryData] = useState({
    receivedItems: 0,
    pendingItems: 0,
  });

  useEffect(() => {
    const getData = async () => {
      const data = await fetchReceptionSummary();
      setReceptionSummaryData(data);
    };
    getData();
  }, []);

  return (
    <Box sx={{ padding: "2em" }} className='rounded-xl h-full	' >
      <Typography variant="h6" className="font-semibold pb-2">
        Reception Summary
      </Typography>
      <Box className="flex justify-center align-center p4 h-full">
      <Grid container spacing={2} className="m-auto">
        {/* First row */}
        <Grid item xs={4} justifyContent={"center"} alignContent={"center"}>
          
          <Inventory2OutlinedIcon className=" text-black text-5xl text-center" />
        </Grid>
        <Grid item xs={4} justifyContent={"center"} alignContent={"center"}>
          <Typography className="font-semibold">Received Packages</Typography>
        </Grid>
        <Grid item xs={4} justifyContent={"center"} alignContent={"center"}>
          <Typography className="font-semibold">{receptionSummaryData.receivedItems}</Typography>
        </Grid>

        {/* Second row */}
        <Grid item xs={4} justifyContent={"center"} alignContent={"center"}>
          <InventoryOutlinedIcon className=" text-black text-5xl" />
        </Grid>
        <Grid item xs={4} justifyContent={"center"} alignContent={"center"}>
          <Typography className="font-semibold">Processed Packages</Typography>
        </Grid>
        <Grid item xs={4} justifyContent={"center"} alignContent={"center"}>
          <Typography className="font-semibold">{receptionSummaryData.pendingItems}</Typography>
        </Grid>
      </Grid>
      </Box>      
    </Box>
  );
};

export default ReceptionSummary;
