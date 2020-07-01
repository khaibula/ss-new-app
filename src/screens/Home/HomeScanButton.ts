import { PrimaryButton$ } from '../../ui/UiButton';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation';
import { useCallback } from 'react';

export const HomeScanButton = PrimaryButton$({
  useOnPress: () => {
    const navigator = useNavigation<HomeScreenNavigationProp>();
    return useCallback(() => {
      navigator.navigate('Menu');
    }, [navigator]);
  },
  useText: () => 'Сканировать',
});
