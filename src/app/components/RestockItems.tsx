"use client"
import React, { useEffect, useState } from 'react';
import { Card, Paper, Typography } from '@mui/material';
import Table from './Table';
import { fetchRestockItems } from '../services/dataService';
import { RestockItem } from '../interfaces/interfaces';

const RestockItems: React.FC = () => {
  const [restockItemsData, setRestockItemsData] = useState<RestockItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchRestockItems();
        setRestockItemsData(data);
      } catch (error) {
        console.error('Error fetching restock items:', error);
      }
    };
    getData();
  }, []);

  return (
    <Card sx={{padding:'2em'}} className='rounded-xl	'>
      <Typography variant="h6" className='font-semibold pb-2'>
        Restock Items
      </Typography>
      <Table data={restockItemsData} />
    </Card>
  );
}

export default RestockItems;
