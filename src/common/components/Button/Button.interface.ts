import type { ButtonProps as MuiButtonProps } from '@mui/material';


export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  color?: string;
}