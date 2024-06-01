import React from 'react';
import { render, waitFor } from '@testing-library/react';
import MissingItems from '../MissingItems';
import * as dataService from '../../services/dataService';

jest.mock('../../services/dataService');

const mockMissingItemsData = [
  { toolRef: '6465', teamMember: 'Alex Noman', details: 'Details' },
  { toolRef: '6466', teamMember: 'Alex Noman', details: 'Details' },
  { toolRef: '6467', teamMember: 'Alex Noman', details: 'Details' }
];

(dataService.fetchMissingItems as jest.Mock).mockResolvedValue(mockMissingItemsData);

test('renders MissingItems component', async () => {
  const { getByText } = render(<MissingItems />);
  await waitFor(() => {
    expect(getByText('Missing Items')).toBeTruthy();
  });
});
