/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Pressable, View,  StyleSheet, Text} from 'react-native';
import { colors } from '../../../config/theme/globalStyles';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
interface Props {
    name: string,
    icon: string,
    component: string,
    //
    isFirst: boolean,
    isLast: boolean,
}
export const MenuItem = ({name, icon, component, isFirst = false, isLast = false}: Props) => {
    const navigation = useNavigation<any>();
    // eslint-disable-next-line no-trailing-spaces

  return (
    <Pressable
        onPress={()=>navigation.navigate(component)}
    >
        <View style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {borderTopLeftRadius: 10, borderTopRightRadius:10, paddingTop:10}),
            ...(isLast && {borderBottomLeftRadius: 10, borderBottomRightRadius:10, paddingBottom:10}),
        }}>
        <Icon name={icon} size={25} style={{marginRight: 10}} color={colors.primary}/>
        <Text style={{color: colors.text}}>{name}</Text>
        <Icon name='chevron-forward-outline' size={25} style={{marginLeft: 'auto'}} color={colors.primary}/>

        </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
})