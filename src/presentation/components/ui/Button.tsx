/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */


import { Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import { colors, globalStyles } from '../../../config/theme/globalStyles';

interface Props {
    styles?: StyleProp<ViewStyle>;
    text: string;
    onPress: ()=> void;
}

export const Button = ({text, styles, onPress}:Props) => {
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
