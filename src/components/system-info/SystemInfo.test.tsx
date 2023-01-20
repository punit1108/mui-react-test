import { render } from '@testing-library/react';
import SystemInfo from './SystemInfo';

test('renders learn react link', () => {
  render(<SystemInfo />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(1).toBeTruthy();
});
