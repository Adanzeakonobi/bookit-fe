/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */
import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import AddVehicle from '../components/AddVehicle';

describe('testing adding vehicle', () => {
  it('checks the user can add a vehicle', () => {
    const { getByPlaceholderText } = render(<Provider store={store}><AddVehicle /></Provider>);
    expect(getByPlaceholderText('Name')).toBeTruthy();
    expect(getByPlaceholderText('Price')).toBeTruthy();
  });

  it('upload file', () => {
    const file = new File(['vehicle'], 'vehicle.png', { type: 'image/png' });

    render(
      <div>
        <input type="file" id="image-upload" />
        <label htmlFor="image-upload">Upload file:</label>
      </div>,
    );
    const input = screen.getByLabelText(/upload file/i);
    userEvent.upload(input, file);

    expect(input.files[0]).toStrictEqual(file);
    expect(input.files.item(0)).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
  });
});
