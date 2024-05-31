import React from 'react';
import { render, waitFor } from '@testing-library/react';
import RentalTools from '../RentalTools';
import * as dataService from '../../services/dataService';

jest.mock('../../services/dataService');

const mockRentalToolsData = [
  { workOrder: '01', toolRef: '6465', teamMember: 'Alex Noman', status: 'Completed', duration: '15:00' },
  { workOrder: '02', toolRef: '5665', teamMember: 'Razib Rahman', status: 'In Progress', duration: '05:00' },
  { workOrder: '03', toolRef: '1755', teamMember: 'Luke Norton', status: 'Not Started', duration: '00:00' }
];

(dataService.fetchRentalTools as jest.Mock).mockResolvedValue(mockRentalToolsData);

test('renders RentalTools component', async () => {
  const { getByText } = render(<RentalTools />);
  await waitFor(() => {
    expect(getByText('Rental Tools')).toBeInTheDocument();
    expect(getByText('01')).toBeInTheDocument();
    expect(getByText('Alex Noman')).toBeInTheDocument();
  });
});
