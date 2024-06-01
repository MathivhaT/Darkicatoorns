import React from 'react';
import { render, waitFor } from '@testing-library/react';
import WorkOrderStatus from '../WorkOrderStatus';
import * as dataService from '../../services/dataService';

jest.mock('../../services/dataService');

const mockWorkOrderStatusData = { completed: 7, inProgress: 3, due: 2 };

(dataService.fetchWorkOrderStatus as jest.Mock).mockResolvedValue(mockWorkOrderStatusData);

test('renders WorkOrderStatus component', async () => {
  const { getByText } = render(<WorkOrderStatus />);
  await waitFor(() => {
    expect(getByText('Work Order Status')).toBeTruthy();
  });
});
