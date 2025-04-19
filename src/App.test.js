import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading or element in the app', () => {
  render(<App />);
  
  // Try to match something that is definitely rendered
  const element = screen.getByText(/dashboard|water footprint|weather/i); // Modify as per what you see
  expect(element).toBeInTheDocument();
});
