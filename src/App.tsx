/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  );
};
