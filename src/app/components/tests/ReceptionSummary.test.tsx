import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ReceptionSummary from '../ReceptionSummary';
import * as dataService from '../../services/dataService';

jest.mock('../../.services/dataService');

const mockReceptionSummaryData = { receivedItems: 120, pendingItems: 30 };

(dataService.fetchReceptionSummary as jest.Mock).mockResolvedValue(mockReceptionSummaryData);

test('renders ReceptionSummary component', async () => {
  const { getByText } = render(<ReceptionSummary />);
  await waitFor(() => {
    expect(getByText('Reception Summary')).toBeInTheDocument();
    expect(getByText('Received Items: 120')).toBeInTheDocument();
    expect(getByText('Pending Items: 30')).toBeInTheDocument();
  });
});
