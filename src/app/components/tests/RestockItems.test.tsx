import React from 'react';
import { render, waitFor } from '@testing-library/react';
import RestockItems from '../RestockItems';
import * as dataService from '../../services/dataService';

jest.mock('../../services/dataService');

const mockRestockItemsData = [
  { toolRef: '6465', toolEquipment: 'Screws', stockStatus: 'Low', details: 'Details' },
  { toolRef: '6466', toolEquipment: 'Wires (electrical)', stockStatus: 'None', details: 'Details' },
  { toolRef: '6467', toolEquipment: 'Bolts', stockStatus: 'None', details: 'Details' }
];

(dataService.fetchRestockItems as jest.Mock).mockResolvedValue(mockRestockItemsData);

test('renders RestockItems component', async () => {
  const { getByText } = render(<RestockItems />);
  await waitFor(() => {
    expect(getByText('Restock Items')).toBeTruthy();
  });
});
