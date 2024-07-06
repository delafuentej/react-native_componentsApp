/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { Pressable, Text} from 'react-native';

interface Props {
    onPress: ()=> void;
    text: string
}

export const Button = ({text, onPress}:Props) => {
  return (
    <Pressable
    onPress={onPress}
>
    <Text>{text}</Text>
    </Pressable>

  );
};
