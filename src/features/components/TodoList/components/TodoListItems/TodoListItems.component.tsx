import type { FunctionComponent } from 'react'
import type { TodoListItemsProps } from './TodoListItems.interface';

import { Stack } from '@mui/material';
import { TodoListItem } from '../TodoListItem';

export const TodoListItems: FunctionComponent<TodoListItemsProps> = ({ items }) => {
  return (
    <Stack direction="column" spacing={1} my={4}>
      {items.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </Stack>
  );
};