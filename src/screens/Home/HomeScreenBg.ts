import { UiScreenBg$ } from '../../ui/UiScreenBg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useAction } from '../../hooks/useAction';
import { useCallback } from 'react';
import { homeActions } from '../../store/HomeSlice';

export const HomeScreenBg = UiScreenBg$({
  useLoader: () => !useSelector<RootState, boolean>((state) => state.homeScreen.isReady),
  useBgSource: () => ({ uri: 'http://a0319139.xsph.ru/img/hello_bg.jpg' }),
  useLoadHandler: () => {
    const handleLoad = useAction(homeActions.bgLoaded);
    return useCallback(() => handleLoad(), []);
  },
});
