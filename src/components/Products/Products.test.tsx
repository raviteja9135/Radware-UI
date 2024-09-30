import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Products from './Products';

describe('<Products />', () => {
  test('it should mount', () => {
    render(<Products />);

    const ProductsUI = screen.getByTestId('Products');

    expect(ProductsUI).toBeInTheDocument();
  });
});