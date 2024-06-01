"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Card,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Chart, DoughnutController, ArcElement, Legend } from "chart.js";
import { fetchWorkOrderStatus } from "../services/dataService";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

Chart.register(DoughnutController, ArcElement, Legend);

const WorkOrderStatus: React.FC = () => {
  const [workOrderStatusData, setWorkOrderStatusData] = useState({
    completed: 0,
    inProgress: 0,
    due: 0,
  });
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchWorkOrderStatus();
      setWorkOrderStatusData(data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const data = {
          datasets: [
            {
              data: [
                workOrderStatusData.completed,
                workOrderStatusData.inProgress,
                workOrderStatusData.due,
              ],
              backgroundColor: ["#4caf50", "#ff9800", "#f44336"],
            },
          ],
        };

        chartInstanceRef.current = new Chart(ctx, {
          type: "doughnut",
          data: data,
          options: {},
          plugins: [
            {
              id: "centerTextPlugin", // Added plugin id
              afterDraw: function (chart) {
                const width = chart.width;
                const height = chart.height;
                const ctx = chart.ctx;

                const totalCompleted = workOrderStatusData.completed;
                const text = totalCompleted.toString() + "\n Completed" + "";

                ctx.restore();
                const fontSize = 0.5;
                ctx.font = `${fontSize}em sans-serif`;
                ctx.textBaseline = "middle";

                const textX = width / 2 - 25;
                const textY = height / 2;

                ctx.fillText(text, textX, textY);
                ctx.save();
              },
            },
          ],
        });
      }
    }
  }, [workOrderStatusData]);

  return (
    <Card sx={{ padding: "2em" }} 	className='rounded-xl h-full	'>
      <Typography variant="h6" className="font-semibold pb-2">
        Work Order Status
      </Typography>
      <Box className="flex justify-center align-center p4 h-full">
      <Grid container spacing={2} >
        {/* First row */}
        <Grid
          item
          xs={4}
          md={4}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <canvas ref={chartRef} width={400} height={400} />
        </Grid>
        <Grid
          item
          xs={4}
          md={8}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            aria-label="contacts"
          >
            <ListItem disablePadding>
              <ListItemIcon>
                <FiberManualRecordIcon className="text-green-500" />
              </ListItemIcon>
              <ListItemText className="text-sm"  primary="Completed" />
              <ListItemIcon>{workOrderStatusData.completed}</ListItemIcon>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <FiberManualRecordIcon className="text-amber-500" />
              </ListItemIcon>
              <ListItemText className="text-sm" primary="Work In Progress" />
              <ListItemIcon>{workOrderStatusData.inProgress}</ListItemIcon>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <FiberManualRecordIcon className="text-red-500" />
              </ListItemIcon>
              <ListItemText className="text-sm" 
               primary="Due       " />
              <ListItemIcon>{workOrderStatusData.due}</ListItemIcon>
            </ListItem>
          </List>{" "}
        </Grid>
      </Grid>
      </Box>
     
    </Card>
  );
};

export default WorkOrderStatus;
