import type { PayloadAction } from '@reduxjs/toolkit';
import type { Todo } from './TodoList.interface';

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getTodos, addTodo, removeTodo, updateTodo } from './api';
import { RootState } from '~/app/store';

export const todoAdapter = createEntityAdapter<Todo>({
  selectId: (todo) => todo.id,
});

export const todoSlice = createSlice({
  name: 'todos',
  initialState: todoAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: {
    [getTodos.pending.type]: (state) => {
      state.loading = true;
    },
    [getTodos.fulfilled.type]: (state, action: PayloadAction<Todo[]>) => {
      todoAdapter.setAll(state, action.payload);
      state.loading = false;
    },
    [addTodo.fulfilled.type]: (state, action: PayloadAction<Todo>) => {
      todoAdapter.addOne(state, action.payload);
    },
    [updateTodo.fulfilled.type]: (state, action: PayloadAction<Todo>) => {
      const { id, ...changes } = action.payload;
      todoAdapter.updateOne(state, {
        id,
        changes,
      });
    },
    [removeTodo.fulfilled.type]: (state, action: PayloadAction<string>) => {
      todoAdapter.removeOne(state, action.payload);
    },
  },
});

export const todoSelectors = todoAdapter.getSelectors<RootState>(
  (state) => state.todos
);

export const selectIsLoadingTodos = (state: RootState) => state.todos.loading;

export const {
  selectAll: selectAllTodos,
  selectById: selectTodoById,
} = todoSelectors;

export default todoSlice.reducer;
