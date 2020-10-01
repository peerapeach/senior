import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import PlacesListScreen from '../screens/map/PlacesListScreen';
import PlaceDetailScreen from '../screens/map/PlaceDetailScreen';
import NewPlaceScreen from '../screens/map/NewPlaceScreen';
import MapScreen from '../screens/map/MapScreen';
import Colors from '../constants/Colors';

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

export default createAppContainer(PlacesNavigator);
