import type { FunctionComponent } from 'react'

import { useState } from 'react';
import { Button } from '~/common/components'
import { Box, Typography } from '@mui/material'

export const Counter: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((value) => value + 1);
  const decrement = () => setCount((value) => value - 1);

  return (
    <Box>
      <Button onClick={increment}>+</Button>
      <Typography>{count}</Typography>
      <Button onClick={decrement}>+</Button>
    </Box>
  );
};