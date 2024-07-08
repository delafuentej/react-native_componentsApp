/* eslint-disable jsx-quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {  StyleSheet, View, Animated} from 'react-native';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
import { useAnimation } from '../../hooks/useAnimation';
import { CustomView } from '../../components/ui/CustomView';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';


export const Animation101Screen = () => {
        const {colors} = useContext(ThemeContext);
        const {animatedOpacity, animatedTop, fadeIn, fadeOut, movementToTop} = useAnimation();
      
  return (
    <CustomView
        style={styles.container}
        margin>
         <Title text='Animation 101'/>
         <View style={styles.container}>
            <Animated.View
                style={[
                    styles.purpleBox, {
                    backgroundColor: colors.primary,
                    },
                    {
                    opacity: animatedOpacity,
                    transform:[{
                        translateY: animatedTop,
                    },
                ],
                }]}
            />
              {/* <Animated.View 
                style={[
                    styles.purpleBox, {
                    opacity: animatedTransparent,
                }]}
            /> */}


           <Button
                styles={{marginTop: 10}}
                onPress={() =>{
            fadeIn({}),
            movementToTop({initialPosition: -1000});
           }} text='Fade-In' />
           <Button styles={{marginTop: 10}} onPress={() =>fadeOut({})} text='Fade-Out' />
        </View>

    
    </CustomView>
    
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    purpleBox: {
        width:100,
        height:100,
    },
});
