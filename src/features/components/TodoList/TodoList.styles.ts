import { styled, alpha } from '@mui/material';
import { Card, Box, LinearProgress } from '@mui/material';

export const Container = styled(Card)(() => ({
  position: 'relative',
  display: 'inline-block',
}));

export const Backdrop = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.65),
  position: 'absolute',
  inset: 0,
}));

export const LoadingIndicator = styled(LinearProgress)(() => ({}));
