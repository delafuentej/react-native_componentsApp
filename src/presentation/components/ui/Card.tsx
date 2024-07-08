/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { StyleProp, View, ViewStyle } from 'react-native';
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props extends PropsWithChildren{
    style?: StyleProp<ViewStyle>;

}
export const Card = ({style, children}:Props) => {
  const {colors} = useContext(ThemeContext);
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
