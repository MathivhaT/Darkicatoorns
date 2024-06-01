import React from 'react';
import { render, waitFor } from '@testing-library/react';
import RentalTools from '../RentalTools';
import * as dataService from '../../services/dataService';


test('renders RentalTools component', async () => {
  const { getByText } = render(<RentalTools />);
  await waitFor(() => {
    expect(getByText('Rental Tools')).toBeInTheDocument();
    expect(getByText('01')).toBeInTheDocument();
    expect(getByText('Alex Noman')).toBeInTheDocument();
  });
});
