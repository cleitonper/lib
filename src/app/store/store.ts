import type { DevToolsEnhancerOptions } from '@reduxjs/toolkit';

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store.reducers';

/**
 * Opções de configuração do
 * Redux Devtools
 *
 * @see {@link https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md Redux Devtools Options}
 */
const devTools: DevToolsEnhancerOptions = {
  name: 'Lib',
};

export const store = configureStore({
  devTools,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});
