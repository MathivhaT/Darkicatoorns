import React from "react";
import RentalTools from "./RentalTools";
import WorkOrderStatus from "./WorkOrderStatus";
import MissingItems from "./MissingItems";
import ToolsAvailability from "./ToolsAvailability";
import RestockItems from "./RestockItems";
import ReceptionSummary from "./ReceptionSummary";
import { Grid } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Grid padding={2} container spacing={2}>
        {/* First row */}
        <Grid  item xs={12} md={7} lg={7}>
          <RentalTools />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <WorkOrderStatus />
        </Grid>

        {/* Second row */}
        <Grid className='rounded-xl	border-black	' item xs={12} md={6} lg={6}>
          <MissingItems />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <ToolsAvailability  />
        </Grid>

        {/* third row */}
        <Grid item xs={12} md={7} lg={7}>
          <RestockItems />
        </Grid>
        <Grid item xs={7}md={5} lg={5}>
          <ReceptionSummary />
        </Grid>
      </Grid>
      
    </div>
  );
};

export default Dashboard;
