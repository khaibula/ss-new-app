import { UiLogo$ } from '../../ui/UiLogo';
import { useAction } from '../../hooks/useAction';
import { useCallback } from 'react';
import { homeActions } from '../../store/HomeSlice';

export const HomeLogo = UiLogo$({
  useLoadHandler: () => {
    const handleLoad = useAction(homeActions.logoLoaded);
    return useCallback(() => handleLoad(), []);
  },
  useSource: () => ({
    uri: 'http://a0319139.xsph.ru/img/logo.png',
  }),
});
