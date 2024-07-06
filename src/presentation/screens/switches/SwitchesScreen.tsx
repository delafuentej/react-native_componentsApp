/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */


import { Title } from '../../components/ui/Title';
import { CustomView } from '../../components/ui/CustomView';
import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';
import { Separator } from '../../components/ui/Separator';


export const SwitchesScreen = () => {
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [state, setState] = useState({
        isActive: true,
        isHandsome: false,
        isHappy: true,
    })

  return (
    <CustomView style={{marginTop: 100, paddingHorizontal:10}}>
        <Title text='SwitchesScreen'/>
        <Card>
            <CustomSwitch
                isOn={state.isActive}
                onChange={(value)=> setState({...state, isActive: value})}
                text='Activ'
            />
            <Separator />

             <CustomSwitch
                isOn={state.isHandsome}
                onChange={(value)=> setState({...state, isHandsome: value})}
                text='Handsome'
            />
              <Separator />
             <CustomSwitch
                isOn={state.isHappy}
                onChange={(value)=> setState({...state, isHappy: value})}
                text='Happy'
            />

        </Card>
        
    </CustomView>
  );
};
