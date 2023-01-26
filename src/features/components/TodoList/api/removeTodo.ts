import { createAsyncThunk } from '@reduxjs/toolkit';
import { sleep } from '~/common/util/time/sleep';

export const removeTodo = createAsyncThunk(
  'todos/removeTodo',
  async (id: number) => {
    await sleep(2000);
    return id;
  }
);
