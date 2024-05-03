/**
 * @jest-environment jsdom
 */
import React from 'react';
import { screen } from '@testing-library/react';
import MainPage from './MainPage.tsx';
import { render } from '@/__tests__/utils.tsx';

jest.mock('@repo/ui', () => {
  const FullCalendar = () => <div>FullCalendar</div>;
  const HighCharts = () => <div>HighCharts</div>;
  const FroalaEditor = () => <div>FroalaEditor</div>;
  const RealGrid = () => <div>RealGrid</div>;
  return {
    FullCalendar,
    HighCharts,
    FroalaEditor,
    RealGrid,
  };
});

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: () => [],
      i18n: {},
    };
  },
}));

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
