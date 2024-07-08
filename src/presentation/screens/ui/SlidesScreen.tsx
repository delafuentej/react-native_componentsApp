/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {FlatList, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, Text, View} from 'react-native';
import { Title } from '../../components/ui/Title';
import { SlideItem } from '../../components/ui/SlideItem';
import { Button } from '../../components/ui/Button';
import { useState, useRef, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext';


export interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
  }

  const items: Slide[] = [
    {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../../assest/slide-1.png'),
    },
    {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../../assest/slide-2.png'),
    },
    {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../../assest/slide-3.png'),
    },
  ];

export const SlidesScreen = () => {
    const {colors} = useContext(ThemeContext);
    const[ currentSlideIndex, setCurrentSlideIndex ] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const navigation = useNavigation();
    
    
    
    //pagination - onScroll()=> to determinate num page
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>)=>{
        const {contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor( contentOffset.x / layoutMeasurement.width);
        setCurrentSlideIndex((currentIndex > 0) ? currentIndex : 0);
  // console.log('currentIndex',currentIndex);
    };

    const scrollToSlide = (index: number) =>{
    
        if (!flatListRef.current) return;
        
        flatListRef.current.scrollToIndex({
            index: index,
            animated: true,
        });
    };
  return (
    <View style={{flex:1, backgroundColor: colors.background}}> 
        <Title text='Slides Screen' safe/>
        <FlatList
            ref={flatListRef}
            data={items}
            horizontal
            keyExtractor={(item)=> item.title}
            renderItem={({item})=> <SlideItem item={item}/>}
            pagingEnabled
            // decelerationRate='fast'
            scrollEnabled={false}
            onScroll={onScroll}
        />
        { currentSlideIndex === items.length - 1 ? (
            <Button 
                text='Go back'
                styles={{position: 'absolute', bottom:60, right: 30, width: 100}}
                onPress={()=>navigation.goBack()}
            />

        ) : (
            <Button
            text='Next'
            styles={{position: 'absolute', bottom:60, right: 30, width: 100}}
            onPress={()=>scrollToSlide(currentSlideIndex + 1)} />
        )
        } 
        
            
    </View>
  );
};
function useNavigate() {
    throw new Error('Function not implemented.');
}

