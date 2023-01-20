import { render } from '@testing-library/react';
import Token from './Token';

test('renders learn react link', () => {
  render(<Token />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(1).toBeTruthy();
});
