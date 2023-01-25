import type { FunctionComponent, PropsWithChildren } from 'react';

import { ThemeProvider } from '@mui/material';
import { theme } from '~/app/theme';

export const FeaturesProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
};