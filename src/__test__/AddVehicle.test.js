import React from 'react';
// import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import AddVehicle from '../components/AddVehicle';

describe('testing adding vehicle', () => {
  it('checks the user can add a vehicle', () => {
    const { getByPlaceholderText } = render(<Provider store={store}><AddVehicle /></Provider>);
    expect(getByPlaceholderText('Name')).toBeTruthy();
    expect(getByPlaceholderText('Price')).toBeTruthy();
  });
});
