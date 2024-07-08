/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Title } from '../../components/ui/Title';
import { CustomView } from '../../components/ui/CustomView';
import { Modal, Platform, View } from 'react-native';
import { Button } from '../../components/ui/Button';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const ModalScreen = () => {
    const [showModal,  setShowModal] = useState(false);

  return (
    <CustomView margin>
       <Title text='Modal Component' safe/>

       <Button 
            text='Open Modal'
            onPress={()=>setShowModal(true)}
       />

       <Modal 
        visible={showModal}
        animationType='slide'
        >
        <CustomView style={{ flex:1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
            <View style={{paddingHorizontal: 10}}>
                <Title text='Modal Content' safe/>
            </View>
            <View style={{flex:1}} />
            <Button
                text='Close Modal'
                onPress={()=> setShowModal(false)}
                styles={{height: Platform.OS === 'android' ? 40 : 60 , borderRadius: 0}}
            />
        </CustomView>
       </Modal>
    </CustomView>
  );
};
