/* eslint-disable jsx-quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {  StyleSheet, View, Animated} from 'react-native';
import { Title } from '../../components/ui/Title';
import { colors } from '../../../config/theme/globalStyles';
import { Button } from '../../components/ui/Button';
import { useAnimation } from '../../hooks/useAnimation';


export const Animation101Screen = () => {
        const {animatedOpacity, animatedTop, fadeIn, fadeOut, movementToTop} = useAnimation();
  return (
    <>
         <Title text='Animation 101'/>
         <View style={styles.container}>
            <Animated.View
                style={[
                    styles.purpleBox, {
                    opacity: animatedOpacity,
                    transform:[{
                        translateY: animatedTop,
                    }],
                }]}
            />
              {/* <Animated.View 
                style={[
                    styles.purpleBox, {
                    opacity: animatedTransparent,
                }]}
            /> */}


           <Button onPress={() =>{
            fadeIn({}),
            movementToTop({initialPosition: -1000});
           }} text='Fade-In' />
           <Button onPress={() =>fadeOut({})} text='Fade-Out' />
        </View>

    
    </>
    
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width:100,
        height:100,
    },
});
