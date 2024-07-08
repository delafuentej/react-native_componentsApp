/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Text } from 'react-native';
import { globalStyles } from '../../../config/theme/globalStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props{
    text: string;
    safe?: boolean;
    backgroundColor?: string;
}

export const Subtitle = ({text, safe = false, backgroundColor}: Props) => {
    const {top} = useSafeAreaInsets();
    const {colors} = useContext(ThemeContext);
    
  return (
        <Text 
        style={{ 
            ...globalStyles.subTitle,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            backgroundColor: backgroundColor ? backgroundColor : colors.cardBackground,

        }}
        >{text}</Text>

  );
};
