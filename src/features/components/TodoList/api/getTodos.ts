import type { Todo } from '../TodoList.interface';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { sleep } from '~/common/util/time/sleep';
import { items } from '../TodoList.mock';

export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async (): Promise<Todo[]> => {
    await sleep(2000);
    return items;
  }
);
