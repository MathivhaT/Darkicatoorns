"use client"
import React, { useEffect, useState } from 'react';
import { Card, Paper, Typography } from '@mui/material';
import { fetchRentalTools } from '../services/dataService';
import Table from './Table';
import { RentalTool } from '../interfaces/interfaces'; // Assuming RentalTool interface is defined in 'interfaces/interfaces'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
const RentalTools: React.FC = () => {
  const [data, setData] = useState<RentalTool[]>([]); // Specify type as RentalTool[]

  useEffect(() => {
    const getData = async () => {
      const result = await fetchRentalTools();
      setData(result);
    };

    getData();
  }, []);

  return (
    <Card sx={{padding:'2em'}} className='rounded-xl h-full	'>
      <Typography variant="h6" className='font-semibold pb-2' >
        <HandymanOutlinedIcon className='text-4xl pb-2 pr-2'></HandymanOutlinedIcon>
         Rental Tools
      </Typography>
      <Table data={data} />
    </Card>
  );
};

export default RentalTools;
