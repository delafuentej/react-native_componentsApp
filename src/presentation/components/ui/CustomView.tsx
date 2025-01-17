/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/globalStyles';
import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>
    children?: ReactNode;
    margin?: boolean
}

export const CustomView = ({style, children, margin = false}: Props) => {

    const{ colors } = useContext(ThemeContext);
  return (
    <View style = {[
        globalStyles.mainContainer,
        style,
        margin ? globalStyles.globalMargin : null,
        {backgroundColor: colors.background},
        ]}>
        {children}
    </View>
  );
};
