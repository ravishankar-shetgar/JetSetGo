import {NavigationProp, RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {HomeNavigationStackType} from '../../navigation/rootNavigation.types';
import styles from './BookingScreen.styles';

interface BookingScreenProps {
  route: RouteProp<HomeNavigationStackType, 'Booking'>;
  navigation: NavigationProp<HomeNavigationStackType>;
}

/**  */
const BookingScreen: React.FC<BookingScreenProps> = props => {
  const {navigation, route} = props;

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(route.params.flightInfo)}</Text>
    </View>
  );
};

export default BookingScreen;
