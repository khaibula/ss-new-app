import { useCallback, useMemo } from 'react';

export type FunctionType = (...args: any) => any;
export const useOptionalHook = <H extends FunctionType>(
  hook: H | undefined,
  params?: Parameters<H>
): ReturnType<H> | undefined => {
  const hookMem = useMemo(() => {
    if (hook) {
      return hook;
    } else {
      return () => undefined;
    }
  }, []);
  return hookMem(params);
};
