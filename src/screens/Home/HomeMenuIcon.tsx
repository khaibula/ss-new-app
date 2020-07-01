import { UiIcon$ } from '../../ui/UiIcon';
import { colors } from '../../ui/theme';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { HomeScreenNavigationProp } from '../../navigation';

export const HomeMenuIcon = UiIcon$({
  useOnPress: () => {
    const navigator = useNavigation<HomeScreenNavigationProp>();
    console.log(navigator);
    return useCallback(() => {
      navigator.navigate('Menu');
    }, [navigator]);
  },
  color: colors.white,
  name: 'ios-menu',
});
