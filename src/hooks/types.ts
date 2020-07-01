export type Hook<R, T extends [] = []> = (...args: T) => R;
export type UseState = <S>(defaultState: S) => [S, S];
export type CallBackHook<B extends [] = [], T extends [] = [], R = void> = (...args: T) => (...args: B) => R;
