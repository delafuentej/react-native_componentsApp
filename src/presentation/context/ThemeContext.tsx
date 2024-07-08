/* eslint-disable no-trailing-spaces */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { ThemeColors, darkColors, lightColors } from "../../config/theme/globalStyles";
import { AppState, Appearance, useColorScheme } from 'react-native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors : ThemeColors;
    isDark: boolean;

    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:PropsWithChildren) =>{
    // ios - SO THEME from react-native
    const colorScheme = useColorScheme();


    const[ currentTheme, setCurrentTheme ] = useState<ThemeColor>('light');

    // ios - SO THEME from react-native
    useEffect(()=>{
       if (colorScheme === 'dark'){
        setCurrentTheme('dark');
       }else{
        setCurrentTheme('light');
       }
    },[colorScheme]);

    // useEffect(() => {
    //     const subscription = AppState.addEventListener('change', nextAppState => {
    //         // console.log({nextAppState})
    //         const colorScheme = Appearance.getColorScheme();
    //         setCurrentTheme( colorScheme === 'dark' ? 'dark' : 'light');

    //     });
    
    //     return () => {
    //       subscription.remove();
    //     };
    //   }, []);

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme(theme);
    };
    
    return(
        <ThemeContext.Provider
            value={{
                currentTheme: currentTheme,
                isDark: (currentTheme !== 'light'),
                colors: currentTheme === 'light' ? lightColors : darkColors,
                setTheme: setTheme,
            }}
        >
            {children}


        </ThemeContext.Provider>
    );
};