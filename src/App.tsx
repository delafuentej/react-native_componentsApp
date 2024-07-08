/* eslint-disable no-trailing-spaces */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { ThemeProvider, ThemeContext } from './presentation/context/ThemeContext';
import { PropsWithChildren, useContext } from 'react';


const AppNavigationContainer = ({children}:PropsWithChildren)=>{
   const {isDark} = useContext(ThemeContext);
  return(
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
    
        {children}
    
    </NavigationContainer>
  );
};

const AppTheme = ({children}:PropsWithChildren) =>{
  return(
    <ThemeProvider>
      <AppNavigationContainer>
        {children}
      </AppNavigationContainer>
     </ThemeProvider>
  );
};


export const App = () => {
  return (
      <AppTheme>
           <StackNavigator />
      </AppTheme>
  );
};
