import type { FunctionComponent, PropsWithChildren } from 'react';
import type { ButtonProps } from './Button.interface';


export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  color = '#000000',
}) => {
  return (
    <button style={{ color }}>
      {children}
    </button>
  )
};