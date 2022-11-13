import { configureStore } from '@reduxjs/toolkit'
import JobListReducer from './JobListReducer'
// ...

const store = configureStore({
  reducer: {
   jobs: JobListReducer
  },
})

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U} ? U : never

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store