import {NavigationProp, RouteProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import CText from '../../components/CText/CText.view';
import FlightCardView from '../../components/FlightCard/FlightCard.view';
import STRINGS from '../../constants/strings';
import {HomeNavigationStackType} from '../../navigation/rootNavigation.types';
import {SeatSelector, SummaryCard} from './BookingScreen.components';
import styles from './BookingScreen.styles';

interface BookingScreenProps {
  route: RouteProp<HomeNavigationStackType, 'Booking'>;
  navigation: NavigationProp<HomeNavigationStackType>;
}

/**  */
const BookingScreen: React.FC<BookingScreenProps> = props => {
  const {
    route: {params},
  } = props;

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const onPressBook = () => {};

  return (
    <View style={styles.container}>
      <FlightCardView data={params.flightInfo} />

      <View style={styles.seatSelectionContainer}>
        <CText variant="Header4">{STRINGS.selectSeats}</CText>

        <SeatSelector
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
      </View>

      <View style={styles.seatSelectionContainer}>
        <SummaryCard
          selectedSeats={selectedSeats}
          onPressBook={onPressBook}
          fare={params.flightInfo.fare}
        />
      </View>
    </View>
  );
};

export default BookingScreen;
