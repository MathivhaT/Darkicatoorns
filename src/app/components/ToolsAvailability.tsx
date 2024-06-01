"use client";
import React, { useEffect, useState, useRef } from "react";
import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import BuildIcon from "@mui/icons-material/Build";
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';

import { fetchToolsAvailability } from "../services/dataService";

interface ToolsAvailabilityData {
  rentalItems: number;
  spareParts: number;
}

const ToolsAvailability: React.FC = () => {
  const [toolsAvailabilityData, setToolsAvailabilityData] =
  useState<ToolsAvailabilityData>({ rentalItems: 0, spareParts: 0 });

  useEffect(() => {
    const getData = async () => {
      const data = await fetchToolsAvailability();
      setToolsAvailabilityData(data);
    };
    getData();
  }, []);

  return (
    <Card sx={{ padding: "2em" }} className="rounded-xl h-full	">
      <Typography variant="h6" className="font-semibold pb-2">
        Tools and Equipments Availability
      </Typography>
      <Box className="flex  justify-center text-center align-center p4 h-full">

      <Grid container spacing={2}  justifyContent={'center'} alignContent={'center'} className="m-auto  ">
        {/* First row */}
        <Grid item xs={4} justifyContent={'center'} alignContent={'center'}>
          <HandymanOutlinedIcon className=" text-black text-4xl" />
        </Grid>
        <Grid item xs={4} justifyContent={'center'} alignContent={'center'}>
          <Typography className="font-semibold" >
            Rental Items
          </Typography>
        </Grid>
        <Grid item xs={4} justifyContent={'center'} alignContent={'center'}>
          <Gauge
            width={70}
            height={70}
            cornerRadius="50%"
            sx={(theme) => ({
             [`& .${gaugeClasses.valueArc}`]: {
                fill: '#EB6E00',
              },
            
            })}
            value={toolsAvailabilityData.rentalItems}
          ></Gauge>
        </Grid>

        {/* Second row */}
        <Grid item xs={4} justifyContent={'center'} alignContent={'center'}>
        <BuildIcon className=" text-black text-4xl" />
        </Grid>
        <Grid item xs={4}  justifyContent={'center'} alignContent={'center'}>
          <Typography className="font-semibold" >
          Spare Parts
          </Typography>
        </Grid>
        <Grid item xs={4} justifyContent={'center'} alignContent={'center'}>
          <Gauge
            width={70}
            height={70}
            value={toolsAvailabilityData.spareParts}
            cornerRadius="50%"
            sx={(theme) => ({
             [`& .${gaugeClasses.valueArc}`]: {
                fill: '#37AF61',
              },
            
            })}
          />
        </Grid>
      </Grid>
      </Box>
    </Card>
  );
};

export default ToolsAvailability;
