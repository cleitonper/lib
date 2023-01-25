import type { FunctionComponent } from 'react'

import { useState } from 'react';
import { Container, CounterButton, CounterValue } from './Counter.styles';

export const Counter: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((value) => value + 1);
  const decrement = () => setCount((value) => value - 1);

  return (
    <Container>
      <CounterButton onClick={decrement}>-</CounterButton>
      <CounterValue>{count}</CounterValue>
      <CounterButton onClick={increment}>+</CounterButton>
    </Container>
  );
};