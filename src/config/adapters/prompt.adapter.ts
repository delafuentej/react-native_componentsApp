/* eslint-disable prettier/prettier */
import prompt from 'react-native-prompt-android';
import { ViewStyle } from 'react-native';

interface Options {
    title: string;
    subtitle?: string;
    buttons: PromptButton[];
    promptType: 'default' | 'plain-text' |'secure-text';
    defaultValue?: string;
    placeholder?: string;

}

interface PromptButton {
    text: string;
    onPress: ()=> void;
    style?:'cancel' | 'default' | 'destructive';

}

export const showPrompt = ({title, subtitle, buttons, promptType = 'plain-text', defaultValue, placeholder}: Options) => {
    prompt(
        title,
        subtitle,
        buttons,
        // [
        //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //     {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
        //    ],
           {
               type: promptType,
               cancelable: false,
               defaultValue: defaultValue,
               placeholder: placeholder,
           }
    );
};

