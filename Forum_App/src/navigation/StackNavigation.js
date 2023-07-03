import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenMatch, optionMatch} from './ScreenService';
import RouteKey from './RouteKey';
import {BottomTab} from './BottomTab';

// export const componentMatch = stackName => {
//   switch (stackName) {
//     case RouteKey.MainStack:
//       return MainNavigator;
//     default:
//       return '';
//   }
// };

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RouteKey.MainTab}
      component={BottomTab}
      options={optionMatch}
    />
  </Stack.Navigator>
);

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RouteKey.SignInScreen}
      component={screenMatch(RouteKey.SignInScreen)}
      options={optionMatch}
    />
    <Stack.Screen
      name={RouteKey.SignUpScreen}
      component={screenMatch(RouteKey.SignUpScreen)}
      options={optionMatch}
    />
  </Stack.Navigator>
);

export const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RouteKey.MainStack}
      component={HomeNavigator}
      options={optionMatch}
    />
    <Stack.Screen
      name={RouteKey.AuthStack}
      component={AuthNavigator}
      options={optionMatch}
    />
  </Stack.Navigator>
);
