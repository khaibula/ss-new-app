import styled from 'styled-components/native';
import { Color, colors, extractColor, m2, m3 } from './theme';
import { TextProps, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
import React, { useCallback } from 'react';
import { createFipc, WithHooks } from 'react-fipc';
import { CallBackHook, Hook } from '../hooks/types';
import { noop } from 'lodash';

interface ButtonWrapperProps extends TouchableOpacityProps {
  color: Color;
}

const ButtonWrapper = styled.TouchableOpacity<ButtonWrapperProps>`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${m3};
  background-color: ${extractColor};
  border-radius: ${m2};
`;

export interface ButtonTextProps extends TextProps {
  color: Color;
}

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${m3};
  font-weight: bold;
  color: ${extractColor};
  letter-spacing: 1.4px;
`;

type ButtonHooks = {
  useOnPress: CallBackHook;
  useText?: Hook<string>;
};
export interface CustomButtonProps extends ButtonHooks {
  onPress?: () => void;
  bgColor: Color;
  textColor: Color;
  style?: ViewStyle;
  styleText?: TextStyle;
}

export const UiButton: React.FC<CustomButtonProps> = ({
  style,
  styleText,
  onPress,
  children,
  bgColor,
  textColor,
  useOnPress,
  useText = noop,
}) => {
  const text = useText();
  const handle = useOnPress();

  const handleOnPress = useCallback(() => {
    handle();
    if (onPress) {
      onPress();
    }
  }, [onPress, handle]);
  return (
    <ButtonWrapper color={bgColor} onPress={handleOnPress} style={style}>
      <ButtonText style={styleText} color={textColor}>
        {text}
        {children}
      </ButtonText>
    </ButtonWrapper>
  );
};

export const UiButton$ = createFipc(UiButton);
export const PrimaryButton$ = UiButton$({ $carry: true, bgColor: colors.primary, textColor: colors.white });
export const WhiteButton$ = UiButton$({ $carry: true, bgColor: colors.white, textColor: colors.primary });
