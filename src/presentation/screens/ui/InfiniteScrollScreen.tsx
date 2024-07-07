/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Text, View } from 'react-native';
import { Title } from '../../components/ui/Title';
import { useState } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../../config/theme/globalStyles';

export const InfiniteScrollScreen = () => {
    const[numbers, setNumbers] = useState([0,1,2,3,4,5,6,7,8,9,10]);

    const loadMore=()=>{
        const newArray = Array.from({length: 10},(_,i) =>numbers.length + i);

        setTimeout(()=>{
            setNumbers([...numbers, ...newArray]);
        },2000);
    };
  return (
    <CustomView margin>
        <Title text='InfiniteScroll Screen' safe/>
        <FlatList
            data={numbers}
            onEndReached={loadMore}
            //para que carge los items antes de llegar al final => 
            onEndReachedThreshold={0.6}
            keyExtractor={(item)=>item.toString()}
            renderItem={({item})=><Text style={{ height: 400, backgroundColor: 'black', color:'white', fontWeight: 'bold', fontSize: 50}}>{item}</Text>}
        />
    </CustomView>
  );
};
