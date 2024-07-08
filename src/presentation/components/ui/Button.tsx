/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */


import { Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {  globalStyles } from '../../../config/theme/globalStyles';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props {
    styles?: StyleProp<ViewStyle>;
    text: string;
    onPress: ()=> void;
}

export const Button = ({text, styles, onPress}:Props) => {
    const {colors} = useContext(ThemeContext);
  return (
    <Pressable
    onPress={onPress}
    style={({pressed})=>([
        globalStyles.btnPrimary,{
            opacity: pressed ? 0.7 : 1,
            backgroundColor: colors.primary,
        },
        styles,
    ])}
>
    <Text style={[
        globalStyles.btnPrimaryText, {
            color: colors.buttonTextColor,
        },
    ]}>{text}</Text>
    </Pressable>

  );
};
