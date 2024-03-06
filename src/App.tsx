import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_ROUTES, SCREENS} from "./routes/routes.ts";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SCREENS.HOME}
            >
          {APP_ROUTES.map((route) => (
              <Stack.Screen name={route.name} component={route.component} options={route.options} />
              ))}
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
};
export default App;
