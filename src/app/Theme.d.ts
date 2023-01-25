import type {} from '@mui/material';
import type {} from '@mui/material/styles';
import type {} from '@mui/material/Typography';


declare module '@mui/material/styles' {
  interface Palette {
    counter: TypeCounter;
  }

  export interface PaletteOptions {
    counter: TypeCounter;
  }

  interface TypeCounter {
    primary: {
      light: string;
      main: string;
      dark: string;
    };
  }
}
