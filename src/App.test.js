import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero and primary work link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /simple experiences/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /explore my work/i })).toHaveAttribute('href', '#work');
});
