import type { FunctionComponent, PropsWithChildren } from 'react';
import type { ButtonProps } from './Button.interface';

import { Button as MuiButton } from '@mui/material';


export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  color,
  ...muiButtonProps
}) => {
  return (
    <MuiButton sx={{ color }} {...muiButtonProps}>
      {children}
    </MuiButton>
  )
};

Button.defaultProps = {
  variant: 'contained',
  color: '#000000',
};