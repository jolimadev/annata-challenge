import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GitHub Top List Repositories title', () => {
  render(<App />);
  const titleElement = screen.getByText(/GitHub Top List Repositories/i);
  expect(titleElement).toBeInTheDocument();
});
