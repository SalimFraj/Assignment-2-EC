import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the name Salim on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Salim/i);
  expect(nameElement).toBeInTheDocument();
});
