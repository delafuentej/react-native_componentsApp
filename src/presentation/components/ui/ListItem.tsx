/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {Image, Text } from 'react-native';
import { colors } from '../../../config/theme/globalStyles';
import { FadeInImage } from './FadeInImage';

interface Props {
    number:number;
}

export const ListItem = ({number}: Props) => {
  return (
    <FadeInImage
        uri= {`https://picsum.photos/id/${number}/200/300`}
        style={{
            height: 400,
            width: '100%',
        }}
    />
    // <Image 
    //     source={{ uri: `https://picsum.photos/id/${number}/200/300`}}
    //     style={{ height: 400, width: '100%'}}
    // />
        // <Text style={{ height: 400, backgroundColor: colors.primary, color:'white', fontWeight: 'bold', fontSize: 50}}>
        // {number}
        // </Text>
  );
};
