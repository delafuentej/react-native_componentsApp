/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { colors } from '../../../config/theme/globalStyles';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren{
    style?: StyleProp<ViewStyle>;

}
export const Card = ({style, children}:Props) => {
  return (
    <View style={[
        {
            backgroundColor: colors.cardBackground,
            borderRadius: 10,
            padding: 10,
        },
        style,
    ]}>
       {children}
    </View>
  );
};
