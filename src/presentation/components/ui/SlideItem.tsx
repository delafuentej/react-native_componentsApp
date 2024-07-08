/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Text, View, useWindowDimensions } from 'react-native';
import { Slide } from '../../screens/ui/SlidesScreen';
import { Image } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/globalStyles';

interface Props {
    item: Slide
}
export const SlideItem = ({item}: Props) => {
    const { width } = useWindowDimensions();
    const {title, desc, img} = item;
  return (
    <View style={{
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
    </View>
  );
};
