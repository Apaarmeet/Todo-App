import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
export interface todo {
  title:string
  description:string
}

export interface TodosState{
    todos:todo[];
}

const getTodosFromLocalStorage = ()=>{
    const todos = localStorage.getItem('todos');
    return todos?JSON.parse(todos): [
        {title:"go to gym", description : "Going to gym"},
        {title:"go to home", description : "Going to home"},
    ]
}

// Define the initial state using that type
const initialState: TodosState = {
  todos: getTodosFromLocalStorage()
}

const saveTodosToLocalStorage = (todos:todo[])=>{
    localStorage.setItem('todos',JSON.stringify(todos))
}

export const todosSlice = createSlice({
  name: 'todos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addTodo: (state, action: PayloadAction<todo>) => {
      state.todos.push(action.payload);
      saveTodosToLocalStorage(state.todos)
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload,1)
      saveTodosToLocalStorage(state.todos)
    }

  }
})

export const { addTodo,removeTodo } = todosSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos.todos

export default todosSlice.reducer