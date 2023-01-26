import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from '~/features/components/TodoList/TodoList.slice';

/**
 * Combinação de reducers da aplicação
 */
export const rootReducer = combineReducers({
  todos: todosReducer,
});
