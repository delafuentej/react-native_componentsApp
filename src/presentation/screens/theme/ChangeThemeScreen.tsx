/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Text } from 'react-native';


export const ChangeThemeScreen = () => {
    const {setTheme, currentTheme, colors } = useContext(ThemeContext);

  return (
    <CustomView margin>
        <Title text ={`CurrentTheme is: ${currentTheme}`} safe/>

        <Button
            text='Light'
            onPress = {()=>setTheme('light')}
        />
        <View style={{height: 20}}/>

        <Button
            text='Dark'
            onPress = {()=>setTheme('dark')}
        />
          <View style={{height: 20}}/>

          <Text style={{color: colors.text}}>
            {JSON.stringify(colors, null, 2)}
          </Text>

    </CustomView>
  );
};
