import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/HomeScreen';
import Settings from '../screens/SettingsScreen';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import { useSelector, useDispatch } from 'react-redux';
import { fetchButtons } from '../store/thunks';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  const [buttonsLoaded, setButtonsLoaded] = useState(false);

  const dispatch = useDispatch();
  const buttons = useSelector((state) => state.buttons);

  useEffect(() => {
    dispatch(fetchButtons())
      .then(() => setButtonsLoaded(true));
  }, [dispatch]);

  if (!buttonsLoaded) {
    return null;
  }

  const renderButtons = buttons.map((button) => {
    const matchedScreen = [
      { screen: Home, name: 'Home' },
      { screen: Settings, name: 'Settings' },
      { screen: Screen1, name: 'Screen1' },
      { screen: Screen2, name: 'Screen2' },
      { screen: Screen3, name: 'Screen3' },
    ].find((screen) => screen.name === button.name);

    if (matchedScreen) {
      return (
        <Drawer.Screen
          key={button.name}
          name={button.name}
          component={matchedScreen.screen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <View
                style={{
                  backgroundColor: '#262C3A',
                  borderRadius: 50,
                  width: 70,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: focused ? 4 : 0,
                  borderColor: focused ? 'yellow' : null,
                }}
              >
                <Image
                  key={button.id}
                  source={{ uri: `http://localhost:3001${button.icon}` }}
                  style={{ width: 48, height: 48 }}
                  resizeMode="contain"
                />
              </View>
            ),
            drawerLabelStyle: { display: 'none' },
          }}
        />
      );
    }
    return null;
  });

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#2A3141',
            width: 110,
            paddingTop: 40,
          },
          drawerActiveBackgroundColor: null,
        }}
      >
        {renderButtons}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}