import React from 'react';
import { createFipc } from 'react-fipc';
import { UiTopBar } from '../../ui/UiTopBar';
import { HomeHeadWrapper } from './HomeHeadWrapper';
import { HomeButtonsWrapper } from './HomeButtonsWrapper';
import { HomeMenuIcon } from './HomeMenuIcon';
import { HomeScanButton } from './HomeScanButton';
import { HomeInfoButton } from './HomeInfoButton';
import { HomeHeader } from './HomeHeader';
import { HomeScreenBg } from './HomeScreenBg';
import { HomeLogo } from './HomeLogo';

export interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <HomeScreenBg>
      <UiTopBar>
        <HomeLogo />
        <HomeMenuIcon />
      </UiTopBar>
      <HomeHeadWrapper>
        <HomeHeader />
      </HomeHeadWrapper>
      <HomeButtonsWrapper>
        <HomeScanButton />
        <HomeInfoButton />
      </HomeButtonsWrapper>
    </HomeScreenBg>
  );
};
export const Home$ = createFipc(Home);
