/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {  Animated, PanResponder, StyleSheet, View } from 'react-native';
import { Title } from '../../components/ui/Title';
import { useRef } from 'react';
import { colors } from '../../../config/theme/globalStyles';


export const Animation102Screen = () => {
    const pan = useRef( new Animated.ValueXY()).current;
    
    const panResponser = PanResponder.create({
        onStartShouldSetPanResponder: ()=> true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y,
            },
        ],{
            useNativeDriver: false,
        }
    ),
        onPanResponderRelease: ()=>{
            Animated.spring(
                pan,
                {toValue: {x:0, y:0},
                useNativeDriver: false,
            },
            ).start();
        },
    });

  return (
    <>
        <Title text='Animation102Screen'/>
        <View style={styles.container}>
            <Animated.View 
            {...panResponser.panHandlers}
            style={[pan.getLayout(), styles.box]}
            />


        </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: colors.primary,
      width: 150,
      height: 150,
      borderRadius: 100,
    },
  });
  
