import type { ChangeEventHandler, FunctionComponent, KeyboardEventHandler } from 'react'

import { useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import { useDispatch } from '~/app/store';
import { addTodo } from '~/features/components/TodoList/api';

export const TodoListInput: FunctionComponent = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const onDescriptionChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDescription(event.target.value);
  };

  const onAddKeyPress: KeyboardEventHandler = (event) => {
    if (event.key !== 'Enter') return;
    dispatch(addTodo(description));
  };

  const onAddClick = () => {
    dispatch(addTodo(description));
  }

  return (
    <Stack direction="row" spacing={2} px={4} my={6}>
      <TextField label="Descrição" placeholder="O que você irá fazer?" onChange={onDescriptionChange} onKeyPress={onAddKeyPress} />
      <Button variant="contained" onClick={onAddClick}>Adicionar</Button>
    </Stack>
  );
};