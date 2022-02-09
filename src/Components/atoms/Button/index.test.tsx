import React from 'react'
import { render, screen } from '@testing-library/react';
import Button from '.';

test('it renders Button', () => {
  render(<Button/>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
