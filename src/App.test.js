import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.queryByText(/learn testing/i);
  expect(linkElement2).not.toBeInTheDocument();
});

test('renders learn testing link', () => {
  render(<App />);
  const linkElement2 = screen.queryByText(/learn testing/i);
  expect(linkElement2).not.toBeInTheDocument();
});