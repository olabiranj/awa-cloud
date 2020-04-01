import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Awa/i);
  expect(linkElement).toBeInTheDocument();
});
