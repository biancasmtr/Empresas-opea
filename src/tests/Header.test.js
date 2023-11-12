import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

test('renders Header component', () => {
  const userName = 'John Doe';
  const { getByAltText, getByText } = render(<Header userName={userName} />);

  expect(getByText(userName)).toBeInTheDocument();

  expect(getByAltText('icon list')).toBeInTheDocument();
});
