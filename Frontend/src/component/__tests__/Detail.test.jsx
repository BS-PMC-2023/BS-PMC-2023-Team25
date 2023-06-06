import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Detail from '../Detail';

describe('Detail', () => {
  it('renders the component with correct props', () => {
    const mockProduct = {
      name: 'Product Name',
      type: 'Product Type',
      Snumber: '12345',
      place: 'true',
      repair: 'no',
    };

    render(
      <Router>
        <Detail product={mockProduct} />
      </Router>,
    );

    const productName = screen.getByText(/Product Name \(Product Type\)/i);
    expect(productName).toBeInTheDocument();

    const serialNumber = screen.getByText(/Serial Number: 12345/i);
    expect(serialNumber).toBeInTheDocument();

    const isInStorage = screen.getByText(/Is The Product in Storage: true/i);
    expect(isInStorage).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /השאלה/i });
    expect(button).toBeInTheDocument();
  });
});
