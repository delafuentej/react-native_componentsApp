/* eslint-disable jsx-quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {  StyleSheet, View, Animated, Easing} from 'react-native';
import { Title } from '../../components/ui/Title';
import { colors } from '../../../config/theme/globalStyles';
import { Button } from '../../components/ui/Button';
import { useRef } from 'react';

export const Animation101Screen = () => {
    const animatedOpacity = useRef( new Animated.Value(0)).current;
    const animatedTop = useRef( new Animated.Value(-150)).current;
   
    // const animatedTransparent = useRef( new Animated.Value(1)).current;

    const fadeIn = ()=>{

        Animated.timing( animatedTop, {
            toValue:0,
            duration: 2000,
            useNativeDriver: true,
            easing: Easing.bounce,/* Easing.elastic(2), */
        }).start(()=> console.log('animation top ended'));

        Animated.timing( animatedOpacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start(()=> console.log('animation fadeion ended'));
    };

    const fadeOut = () =>{
        Animated.timing( animatedOpacity, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start(()=> animatedTop.resetAnimation());

    };
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


           <Button onPress={fadeIn} text='Fade-In' />
           <Button onPress={fadeOut} text='Fade-Out' />
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
