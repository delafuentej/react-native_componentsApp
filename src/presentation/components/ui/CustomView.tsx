/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/globalStyles';
import { ReactNode } from 'react';

interface Props {
    style?: StyleProp<ViewStyle>
    children?: ReactNode;
    margin?: boolean
}

export const CustomView = ({style, children, margin= false}: Props) => {
  return (
    <View style = {[
        globalStyles.mainContainer,
        style,
        margin ? globalStyles.globalMargin : null,
        ]}>
        {children}
    </View>
  );
};
