/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {  Alert, View } from 'react-native';
import { Title } from '../../components/ui/Title';
import { CustomView } from '../../components/ui/CustomView';
import { globalStyles } from '../../../config/theme/globalStyles';
import { Button } from '../../components/ui/Button';
import { showPrompt } from '../../../config/adapters/prompt.adapter';


export const AlertScreen = () => {
    
    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ], {
            // userInterfaceStyle:'dark',
            cancelable: true,
            onDismiss(){
                console.log('onDismiss');
            },
        });
    
      const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        
        ], {
            cancelable: true,
            onDismiss(){
                console.log('onDismiss');
            },
        });

      
        const onShowPrompt = () =>{
           
            showPrompt({
                title: 'Prompt',
                subtitle: 'Introduce your password:',
                buttons: [
                    {text:'OK', onPress: ()=> console.log('OK')},
                    {text:'Cancel', onPress: ()=> console.log('Cancel')},
                ],
                placeholder: 'Introduce your password',
            });
              // it does not wokr on Android
            // Alert.prompt(
            //     'Alert.prompt',
            //     'Introduce your email:',
            //     (value: string) => console.log({value}),
            //     'secure-text',
            //     'number-pad',
            // );
            //
        };
    
  return (
    <CustomView style={globalStyles.globalMargin}>
        <Title text='AlertScreen' safe/>

       <Button 
            text='Alert - 2 Buttons'
            onPress={createTwoButtonAlert}
       />
       <View style={{height: 10}}></View>
         <Button 
            text='Alert - 3 Buttons'
            onPress={createThreeButtonAlert}
       />
        <View style={{height: 10}}></View>
         <Button 
            text='Prompt - Input'
            onPress={onShowPrompt}
       />
    </CustomView>
  );
};
