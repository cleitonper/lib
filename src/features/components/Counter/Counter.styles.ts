import { styled } from '@mui/material';
import { Stack, Typography } from '@mui/material';
import { Button } from '~/common/components'

export const Container = styled(Stack)(() => ({
  display: 'inline-flex',
}));

Container.defaultProps = {
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  spacing: 2,
};


export const CounterButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
}));


export const CounterValue = styled(Typography)(() => ({
  fontWeight: 600,
}));