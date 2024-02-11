import {NavigationProp, RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {HomeNavigationStackType} from '../../navigation/rootNavigation.types';
import styles from './BookingSuccessScreen.styles';

interface BookingScreenProps {
  route: RouteProp<HomeNavigationStackType, 'BookingSuccess'>;
  navigation: NavigationProp<HomeNavigationStackType>;
}

/**  */
const BookingSuccessScreen: React.FC<BookingScreenProps> = props => {
  const {route} = props;

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(route.params.flightInfo)}</Text>
    </View>
  );
};

export default BookingSuccessScreen;
