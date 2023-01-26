import type { Todo } from '../TodoList.interface';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { sleep } from '~/common/util/time/sleep';
import { uuidv4 } from '~/common/util/id/uuidv4';

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (description: string): Promise<Todo> => {
    const todo = { id: uuidv4(), description, completed: false }
    await sleep(50);
    return todo;
  }
);
