/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage.tsx';

describe('MainPage', () => {
  test('render', () => {
    render(<MainPage />);
    const element = screen.getByText(/This is MainPage/i);
    expect(element).toBeInTheDocument();
  });

  // it('should have text content', async () => {
  //   render(<MainPage />);
  //   const element = screen.getByText(/env - /i);
  //   expect(element).toHaveTextContent('local');
  // });
});
