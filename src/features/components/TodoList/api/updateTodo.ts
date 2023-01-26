import type { Todo } from '../TodoList.interface';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { sleep } from '~/common/util/time/sleep';

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (todo: Partial<Todo>) => {
    await sleep(0);
    return todo;
  }
);
