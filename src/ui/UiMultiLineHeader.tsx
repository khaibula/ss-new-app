import React from 'react';
import { createFipc, WithHooks } from 'react-fipc';
import { H1 } from './Typo';
import { Hook } from '../hooks/types';

export interface MultiLineHooks {
  useMultiHeader: Hook<string>;
}
export interface MultiLineHeaderProps extends MultiLineHooks {}

const UiMultiLineHeader: React.FC<MultiLineHeaderProps> = ({ useMultiHeader }) => {
  const header = useMultiHeader();
  return (
    <>
      {header.split('\n').map((text) => (
        <H1 key={text}>{text}</H1>
      ))}
    </>
  );
};
export const UiMultiLineHeader$ = createFipc(UiMultiLineHeader);
