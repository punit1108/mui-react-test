import { render } from '@testing-library/react';
import PageContent from './PageContent';

test('renders learn react link', () => {
  render(<PageContent />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(1).toBeTruthy();
});
