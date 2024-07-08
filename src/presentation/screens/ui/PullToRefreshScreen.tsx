/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { Title } from '../../components/ui/Title';
import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../../../config/theme/globalStyles';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


export const PullToRefreshScreen  = () => {
  const {colors} = useContext(ThemeContext);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const {top} = useSafeAreaInsets();
    
    const onRefresh = () =>{
        setIsRefreshing(true);

        setTimeout(()=>{
            setIsRefreshing(false);
        },3000);
    };
  return (
    <ScrollView
        refreshControl={<RefreshControl 
                            refreshing = {isRefreshing}
                            progressViewOffset={top}
                            onRefresh={onRefresh}
                            colors={['red', 'yellow', 'purple']}
                            progressBackgroundColor={colors.cardBackground}
                            />}
                            style={[globalStyles.mainContainer, globalStyles.globalMargin]}
    >
        
            <Title text='PullToRefresh Screen' safe/>
    </ScrollView>
  );
};
