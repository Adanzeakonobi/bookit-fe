import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import DeleteVehicle from '../components/DeleteVehicle';

describe('testing adding vehicle', () => {
  it('checks the user can see', () => {
    const { getByText } = render(<Provider store={store}><DeleteVehicle /></Provider>);
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Price')).toBeTruthy();
    expect(getByText('Vehicle List')).toBeTruthy();
  });
});
