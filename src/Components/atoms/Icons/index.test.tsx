import React from 'react';
import {render, screen } from '@testing-library/react';
import Icon from '.';
import AddIcon from '@mui/icons-material/Add';

test('it should render passed icon', () => {
  render(<Icon icon={<AddIcon data-testid='add-icon'/>}/>);
  
  expect(screen.getByTestId('add-icon')).toBeInTheDocument();
});