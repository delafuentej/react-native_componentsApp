/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Text, useWindowDimensions } from 'react-native';
import { Slide } from '../../screens/ui/SlidesScreen';
import { Image } from 'react-native';
import { globalStyles } from '../../../config/theme/globalStyles';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { CustomView } from './CustomView';

interface Props {
    item: Slide
}
export const SlideItem = ({item}: Props) => {
    const { colors } = useContext(ThemeContext);
    const { width } = useWindowDimensions();
    const {title, desc, img} = item;
  return (
    <CustomView style={{
        flex:1,
        width: width,
        backgroundColor: 'white',
        borderRadius:5,
        padding: 40,
        justifyContent: 'center',
    }}>
        <Image 
            source={img}
            style={{
                width: width * 0.7,
                height: width * 0.7,
                resizeMode: 'center',
                alignSelf: 'center',
            }}
        />
        <Text style={[globalStyles.title, {color: colors.primary}]}>{title}</Text>
        <Text style={{
            color: colors.text,
            marginTop: 20,
        }}>{desc}</Text>
    </CustomView>
  );
};
