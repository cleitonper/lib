import type { FunctionComponent, PropsWithChildren } from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from '~/app/theme';
import { store } from '~/app/store';

export const FeaturesProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
};