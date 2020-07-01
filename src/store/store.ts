import { applyMiddleware, combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { homeSlice } from './HomeSlice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas/rootSaga';

const rootReducer = combineReducers({
  homeScreen: homeSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(rootSaga)
