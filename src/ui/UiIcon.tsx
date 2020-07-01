import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createFipc, WithHooks } from 'react-fipc';
import { Color } from './theme';
import { CallBackHook } from '../hooks/types';

export interface IconProp {
  useOnPress: CallBackHook;
  color?: Color;
  name: string;
}
const UiIcon: React.FC<IconProp> = ({ name, color, useOnPress }) => {
  const handleOnPress = useOnPress();
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Ionicons name={name} size={30} color={color} />
    </TouchableOpacity>
  );
};

export const UiIcon$ = createFipc(UiIcon);
