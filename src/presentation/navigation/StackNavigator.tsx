/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { Animation101Screen } from '../screens/animations/Animation101Screen';
import { Animation102Screen } from '../screens/animations/Animation102Screen';
import { SwitchesScreen } from '../screens/switches/SwitchesScreen';
import { AlertScreen } from '../screens/alerts/AlertScreen';
import { TextInputScreen } from '../screens/inputs/TextInputScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchesScreen" component={SwitchesScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />

    </Stack.Navigator>
  );
}