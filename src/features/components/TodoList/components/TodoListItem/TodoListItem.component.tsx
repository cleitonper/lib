import type { FunctionComponent } from 'react'
import type { TodoListItemProps } from './TodoListItem.interface';

import { Stack, Typography, Checkbox } from '@mui/material';
import { updateTodo } from '~/features/components/TodoList/api';
import { useDispatch } from '~/app/store';

export const TodoListItem: FunctionComponent<TodoListItemProps> = ({
  id,
  description,
  completed,
}) => {
  const dispatch = useDispatch();

  const onToggleTodo = (_event: unknown, completed: boolean) => {
    const payload = { id, completed };
    dispatch(updateTodo(payload));
  };

  return (
    <Stack direction="row" alignItems="center" spacing={1} px={4}>
      <Checkbox checked={completed} onChange={onToggleTodo} />

      <Typography pt={0.25}>
        {description}
      </Typography>
    </Stack>
  );
};