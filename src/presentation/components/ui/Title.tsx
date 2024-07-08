/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { Text } from 'react-native';
import { globalStyles } from '../../../config/theme/globalStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';


interface Props {
    text: string;
    safe?:boolean;
    white?:boolean;
}


export const Title = ({text,safe = false, white = false}: Props) => {
    const {colors} = useContext(ThemeContext);
    const {top} = useSafeAreaInsets();

  return (
        <Text
            style={{
                ...globalStyles.title,
                marginTop: safe ? top : 0,
                marginBottom:10,
                color: colors.text,

            }}
        >{text}</Text>
  );
};
