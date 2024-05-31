"use client"
import React, { useEffect, useState } from 'react';
import { Card, Paper, Typography } from '@mui/material';
import Table from './Table';
import { fetchMissingItems } from '../services/dataService';
import { MissingItem } from '../interfaces/interfaces'; // Import MissingItem interface
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

const MissingItems: React.FC = () => {
  const [missingItemsData, setMissingItemsData] = useState<MissingItem[]>([]); // Specify MissingItem[] as initial state type

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMissingItems();
      setMissingItemsData(data);
    };
    getData();
  }, []);

  return (
    <Card sx={{padding:'2em'}} className='rounded-xl	'>
      <Typography variant="h6" display='flex'alignContent='center' className='font-semibold pb-2 '>     
         <WarningAmberOutlinedIcon className='text-4xl text-amber-500 pb-2 pr-2'></WarningAmberOutlinedIcon>
        Missing Items
      </Typography>
      <Table data={missingItemsData} />
    </Card>
  );
}

export default MissingItems;
