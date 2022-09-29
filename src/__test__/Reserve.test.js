import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Reserve from '../components/Reserve';

describe('testing reserve vehicle', () => {
  it('checks the user can see placeholder', () => {
    const { getByPlaceholderText } = render(<Provider store={store}><Reserve /></Provider>);
    expect(getByPlaceholderText('Date')).toBeTruthy();
    expect(getByPlaceholderText('City')).toBeTruthy();
  });

  it('checks the value of the Title component', () => {
    const { getByText } = render(<Provider store={store}><Reserve /></Provider>);
    expect(getByText('Book This Vehicle')).toBeInTheDocument();
    expect(getByText('Select Vehicle')).toBeInTheDocument();
  });

  it('should render a button with a class ', () => {
    const { getByRole } = render(<Provider store={store}><Reserve /></Provider>);
    expect(getByRole('button')).toHaveClass('reserve-btn');
  });
});
