import {createSlice} from '@reduxjs/toolkit';
import RouteKey from 'navigation/RouteKey';
import AppConfigs from 'configs/env';

export const appInitialState = {
  showGlobalIndicator: false,
  appState: RouteKey.SplashScreen,
  showSearchBar: false,
  apiUrl: AppConfigs.API_URL,
};

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    getSettings: (state, action) => {},
    setAppStack: (state, action) => {
      state.appState = action.payload;
    },
    setShowGlobalIndicator: (state, action) => {
      state.showGlobalIndicator = action.payload;
    },
    setCodePushKey: (state, action) => {
      state.codePushKey = action.payload;
    },
    setApiUrl: (state, action) => {
      state.apiUrl = action.payload;
    },
  },
});

export const appActions = {
  ...appSlice.actions,
};

export default appSlice.reducer;
