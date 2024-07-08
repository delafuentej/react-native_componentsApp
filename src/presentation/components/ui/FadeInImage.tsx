/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */


import { useState } from 'react';
import { ImageStyle, StyleProp, Animated, Image, View, ActivityIndicator } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';



interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}
export const FadeInImage = ({uri, style}: Props) => {
    const[isLoading, setIsLoading ] = useState(true);
    const{animatedOpacity, fadeIn} = useAnimation();

  return (
    <View style={{ justifyContent: 'center', alignItems:'center'}}>

        {isLoading && (
            <ActivityIndicator 
            style={{position:'absolute'}}
            color='grey'
            size={30}

            />
        )}

        <Animated.Image
            source={{uri}}
            style={[style, { opacity: animatedOpacity}]}
            onLoadEnd={()=>{
                fadeIn({duration: 1000});
                setIsLoading(false);
            }}
        />
    </View>
//     <Image 
//         source={{ uri: `https://picsum.photos/id/${number}/200/300`}}
//         style={{ height: 400, width: '100%'}}
// />
  );
};
