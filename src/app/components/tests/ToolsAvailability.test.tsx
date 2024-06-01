import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ToolsAvailability from '../ToolsAvailability';
import * as dataService from '../../services/dataService';


jest.mock('../../services/dataService');

const mockToolsAvailabilityData = { rentalItems: 50, spareParts: 75 };

(dataService.fetchToolsAvailability as jest.Mock).mockResolvedValue(mockToolsAvailabilityData);

test('renders ToolsAvailability component', async () => {
  const { getByText } = render(<ToolsAvailability />);
  await waitFor(() => {
    expect(getByText('Tools and Equipments Availability')).toBeTruthy();
  });
});
