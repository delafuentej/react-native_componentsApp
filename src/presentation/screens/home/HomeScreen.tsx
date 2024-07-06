/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { ScrollView, View } from 'react-native';
import { globalStyles } from '../../../config/theme/globalStyles';
import { Title } from '../../components/ui/Title';
import { MenuItem } from '../../components/ui/MenuItem';


const animationMenuItems = [
    // 01-animationMenuItems
    {
      name: 'Animation 101',
      icon: 'cube-outline',
      component: 'Animation101Screen',
    },
    {
      name: 'Animation 102',
      icon: 'albums-outline',
      component: 'Animation102Screen',
    },
];

 const menuItems = [

  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

const uiMenuItems = [
    // 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchesScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

export const HomeScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
        <View style={globalStyles.globalMargin}>
          <ScrollView>
            <Title text="HomeScreen" safe/>
            {
              //{...item} =  name={name} icon={icon} component={component}
              animationMenuItems.map((item,index)=> <MenuItem
                                          key={index}
                                          {...item}
                                          isFirst={index === 0}
                                          isLast={ index === menuItems.length - 1}
                                          />)
            }
            <View style={{marginTop: 20}}/>

            {
              //{...item} =  name={name} icon={icon} component={component}
              menuItems.map((item,index)=> <MenuItem
                                          key={index}
                                          {...item}
                                          isFirst={index === 0}
                                          isLast={ index === menuItems.length - 1}
                                          />)
            }
             <View style={{marginTop: 20}}/>

          {
              //{...item} =  name={name} icon={icon} component={component}
              uiMenuItems.map((item,index)=> <MenuItem
                                          key={index}
                                          {...item}
                                          isFirst={index === 0}
                                          isLast={ index === menuItems.length - 1}
                                          />)
            }


          </ScrollView>

        </View>
    </View>
  );
};
