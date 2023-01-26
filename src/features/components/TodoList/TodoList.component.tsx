import type { FunctionComponent } from 'react'

import { useEffect } from 'react';
import { Divider } from '@mui/material';
import { Backdrop, Container, LoadingIndicator } from './TodoList.styles';
import { TodoListInput, TodoListItems } from './components';
import { useDispatch, useSelector } from '~/app/store';
import { getTodos } from './api/getTodos';
import { selectAllTodos, selectIsLoadingTodos } from './TodoList.slice';

export const TodoList: FunctionComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  const loading = useSelector(selectIsLoadingTodos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <Container>
      <TodoListInput />
      <Divider />
      <TodoListItems items={todos} />

      {loading && (
        <Backdrop>
          <LoadingIndicator />
        </Backdrop>
      )}
    </Container>
  );
};