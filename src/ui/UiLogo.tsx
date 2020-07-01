import styled from 'styled-components/native';
import { ActivityIndicator, ImageProps } from 'react-native';
import React from 'react';
import { createFipc, WithHooks } from 'react-fipc';
import { useOptionalHook } from '../hooks/useOptionalHook';
import { CallBackHook, Hook } from '../hooks/types';
import { colors } from './theme';

const UiImage = styled.Image`
  height: 32px;
  width: 80px;
`;

export interface UiLogoHooks {
  useSource?: Hook<ImageProps['source']>;
  useLoadHandler?: CallBackHook;
}
export interface UiLogoProps extends UiLogoHooks {
  source?: ImageProps['source'];
}

export const UiLogo: React.FC<UiLogoProps> = ({ useSource, useLoadHandler, source }) => {
  const localSource = useOptionalHook(useSource) ?? source;
  const loadHandler = useOptionalHook(useLoadHandler);
  return localSource ? (
    <UiImage resizeMode="contain" source={localSource} onLoad={loadHandler} />
  ) : (
    <ActivityIndicator size={'small'} color={colors.white} />
  );
};
export const UiLogo$ = createFipc(UiLogo);
