import { WhiteButton$ } from '../../ui/UiButton';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation';
import { useCallback } from 'react';

export const HomeInfoButton = WhiteButton$({
  useOnPress: () => {
    const navigator = useNavigation<HomeScreenNavigationProp>();
    return useCallback(() => {
      navigator.navigate('Menu');
    }, [navigator]);
  },
  useText: () => 'Узнать больше',
  style: {
    marginTop: 10,
  },
});
