/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '../../__test__/utils.tsx';
import { FullCalendar } from './index.tsx';

jest.mock('@fullcalendar/react', () => {
  const FullCalendar: React.FC = () => {
    return <div>fullcalendar</div>;
  };
  return FullCalendar;
});
jest.mock('@fullcalendar/daygrid', () => jest.fn());
jest.mock('@fullcalendar/timegrid', () => jest.fn());
jest.mock('@fullcalendar/list', () => jest.fn());

describe('FullCalendar', () => {
  test('render', () => {
    render(<FullCalendar />);
  });
});
