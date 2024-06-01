import { fetchRentalTools } from '../../services/dataService';
import { render, screen, waitFor } from '@testing-library/react';

import React from 'react';
import RentalTools from '../RentalTools';

jest.mock('../../services/dataService.ts');

const mockRentalToolsData = [
  { workOrder: '01', toolRef: '6465', teamMember: { name: 'Alex Noman', profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', rank: '🥇' }, status: 'Completed', duration: '15:00' },
  { workOrder: '02', toolRef: '5665', teamMember: { name: 'Razib Rahman', profilePic: 'https://randomuser.me/api/portraits/men/2.jpg', rank: '🥈' }, status: 'In Progress', duration: '05:00' },
  { workOrder: '03', toolRef: '1755', teamMember: { name: 'Luke Norton', profilePic: 'https://randomuser.me/api/portraits/men/3.jpg', rank: '🥉' }, status: 'Not Started', duration: '00:00' }
];

describe('RentalTools Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders rental tools data correctly', async () => {
    (fetchRentalTools as jest.Mock).mockResolvedValue(mockRentalToolsData);

    render(<RentalTools />);
    
    await waitFor(() => {
      //console.log(screen.debug()); // Debug statement
      expect(screen.getByText('Rental Tools')).toBeTruthy();
      
    });
  });
});
