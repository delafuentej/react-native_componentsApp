/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../../config/theme/globalStyles';
import { Card } from '../../components/ui/Card';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export const TextInputScreen = () => {
  const[ form,  setForm] = useState({
    name:'',
    email: '',
    phone:'',
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
    <ScrollView>
    <CustomView margin>
        <Title text='TextInput Screen' safe/>
        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder='Name'
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={(value)=> setForm({...form, name: value})}
          />
        </Card>

        <View style={{height:10}} />

        <Card>
          <TextInput
          style={globalStyles.input}
          placeholder='Email'
          autoCapitalize={'words'}
          autoCorrect={false}
          keyboardType='email-address'
          onChangeText= {(value) => setForm({...form, email: value})}
        />
        </Card>
        
        <View style={{height:10}} />
        <Card>
          <TextInput
          style={globalStyles.input}
          placeholder='Phone'
          autoCapitalize={'none'}
          autoCorrect={false}
          keyboardType='phone-pad'
          
          onChangeText={(value)=> setForm({...form, phone: value})}
        />
        </Card>

        <View style={{height:10}} />
        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>


    </CustomView>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};
