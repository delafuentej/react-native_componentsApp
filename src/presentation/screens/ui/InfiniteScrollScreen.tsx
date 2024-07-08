/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { ActivityIndicator, Text, View } from 'react-native';
import { Title } from '../../components/ui/Title';
import { useState } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../../config/theme/globalStyles';
import { ListItem } from '../../components/ui/ListItem';

export const InfiniteScrollScreen = () => {
    const[numbers, setNumbers] = useState([0,1,2,3,4,5,6,7,8,9,10]);

    const loadMore=() => {
        const newArray = Array.from({length: 10},(_,i) =>numbers.length + i);

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        },5000);
    };
  return (
    <View style={{backgroundColor:'black'}}>
        <Title text='InfiniteScroll Screen' safe/>
        <FlatList
            data={numbers}
            onEndReached={loadMore}
            //para que carge los items antes de llegar al final => onEndReachedThreshold
            onEndReachedThreshold={0.6}
            keyExtractor={(item)=>item.toString()}
            renderItem={({item}) => <ListItem number={item}/>}
            ListFooterComponent={()=>{
                <View style={{height: 150, justifyContent:'center'}}>
                    <ActivityIndicator size={60} color={colors.primary} />

                </View>;
            }}
            // renderItem={({item})=>{/* <Text style={{ height: 400, backgroundColor: 'black', color:'white', fontWeight: 'bold', fontSize: 50}}>{item}</Text>} */}
        />
    </View>
  );
};
