/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = ()=>{
    const animatedOpacity = useRef( new Animated.Value(0)).current;
    const animatedTop = useRef( new Animated.Value(0)).current;

    // const animatedTransparent = useRef( new Animated.Value(1)).current;

    const fadeIn = ({duration = 2000, toValue = 1, callback = ()=>{}})=>{

        // Animated.timing( animatedTop, {
        //     toValue:0,
        //     duration: 2000,
        //     useNativeDriver: true,
        //     easing: Easing.bounce,/* Easing.elastic(2), */
        // }).start(()=> console.log('animation top ended'));

        Animated.timing( animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        }).start(callback);
    };

    const fadeOut = ({duration = 2000, toValue = 0, callback = ()=>{}}) =>{
        Animated.timing( animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        }).start(callback);
        //animatedTop.resetAnimation()
    };
    const movementToTop = ({duration = 1000, initialPosition = 0, toValue = 0, easing = Easing.bounce, callback= ()=>{}}) =>{
        animatedTop.setValue(initialPosition);
        Animated.timing( animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
            easing: easing,
        }).start(callback);
    }

    return{
        //properties
        animatedOpacity,
        animatedTop,
        
        //methods
        fadeIn,
        fadeOut,
        movementToTop,
       
    };
};