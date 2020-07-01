import { useDispatch } from 'react-redux';

export const useAction = <A extends any[], R>(actionCreator: (...args: A) => R) => {
  const dispatch = useDispatch();
  return (...args: A): R => dispatch(actionCreator(...args));
};
