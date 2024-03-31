/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header.tsx';

describe('Header', () => {
  test('render', () => {
    render(<Header size={'SM'}>header: test</Header>);
    const element = screen.getByText(/header:/i);
    expect(element).toBeInTheDocument();
  });

  it('should have text content', async () => {
    render(<Header size={'SM'}>header: test</Header>);
    const element = screen.getByText(/header:/i);
    expect(element).toHaveTextContent('test');
  });
});
