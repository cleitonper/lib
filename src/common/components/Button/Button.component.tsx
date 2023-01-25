import type { FunctionComponent, PropsWithChildren } from 'react';
import type { ButtonProps } from './Button.interface';

import { Button as MuiButton } from '@mui/material';


export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  color = '#000000',
}) => {
  return (
    <MuiButton sx={{ color }} variant="contained">
      {children}
    </MuiButton>
  )
};