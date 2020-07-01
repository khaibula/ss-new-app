import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

type HomeState = {
  isReady: boolean;
  headerText: string;
  firstButtonText: string;
  secondButtonText: string;
  logoUrl: string;
  bgUrl: string;
};
const initialState: HomeState = {
  isReady: false,
  headerText: '',
  firstButtonText: '',
  secondButtonText: '',
  logoUrl: '',
  bgUrl: '',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setText: (
      state,
      action: PayloadAction<{ headerText: string; firstButtonText: string; secondButtonText: string }>
    ) => {
      state.headerText = action.payload.headerText;
      state.firstButtonText = action.payload.firstButtonText;
      state.secondButtonText = action.payload.secondButtonText;
    },
    setUrls: (state, action: PayloadAction<{ logoUrl: string; bgUrl: string }>) => {
      state.bgUrl = action.payload.bgUrl;
      state.logoUrl = action.payload.logoUrl;
    },
    setIsReady: (state) => {
      state.isReady = true;
    },
  },
});

const asyncActions = {
  logoLoaded: createAction('home/logoLoaded'),
  bgLoaded: createAction('home/bgLoaded'),
};
export const homeActions = { ...homeSlice.actions, ...asyncActions };
