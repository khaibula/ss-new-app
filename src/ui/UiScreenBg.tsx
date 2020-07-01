import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, ImageProps } from 'react-native';
import { colors } from './theme';
import { createFipc, WithHooks } from 'react-fipc';
import { useOptionalHook } from '../hooks/useOptionalHook';
import { CallBackHook, Hook } from '../hooks/types';

const ScreenBgWrapper = styled.View`
  flex-grow: 1;
  width: 100%;
`;
const ScreenBgInner = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  left: 0;
  top: 0;
`;
const ScreenLoaderWrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 3;
  left: 0;
  top: 0;
  background-color: ${colors.white};
`;
const ScreenBg = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  left: 0;
  top: 0;
`;

export interface UiScreenHooks {
  useLoader?: Hook<boolean>;
  useBgSource?: Hook<ImageProps['source']>;
  useLoadHandler?: CallBackHook;
}
export interface UiScreenBgProps extends UiScreenHooks {
  source?: ImageProps['source'];
}
const UiScreenBg: React.FC<UiScreenBgProps> = ({ source, children, useLoadHandler, useBgSource, useLoader }) => {
  const src = useOptionalHook(useBgSource) ?? source;
  const isLoading = useOptionalHook(useLoader) ?? false;
  const loadHandler = useOptionalHook(useLoadHandler);

  if (src) {
    return (
      <ScreenBgWrapper>
        <ScreenBg source={src} onLoad={loadHandler} />
        <ScreenBgInner>{children}</ScreenBgInner>
        {isLoading && (
          <ScreenLoaderWrapper>
            <ActivityIndicator color={colors.primary} size={'large'} />
          </ScreenLoaderWrapper>
        )}
      </ScreenBgWrapper>
    );
  } else {
    return (
      <ScreenBgWrapper>
        <ScreenLoaderWrapper>
          <ActivityIndicator color={colors.primary} size={'large'} />
        </ScreenLoaderWrapper>
      </ScreenBgWrapper>
    );
  }
};
export const UiScreenBg$ = createFipc(UiScreenBg);
