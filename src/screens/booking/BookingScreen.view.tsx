import {NavigationProp, RouteProp} from '@react-navigation/native';
import moment from 'moment';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getRandomUuid} from '../../../utils';
import CText from '../../components/CText/CText.view';
import FlightCardView from '../../components/FlightCard/FlightCard.view';
import STRINGS from '../../constants/strings';
import {HomeNavigationStackType} from '../../navigation/rootNavigation.types';
import {bookFlightAction} from '../../saga/BookingScreen.saga';
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
    navigation,
  } = props;

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const dispatch = useDispatch();

  const onPressBook = () => {
    dispatch(
      bookFlightAction({
        ...params.flightInfo,
        totalFare: params.flightInfo.fare * selectedSeats.length,
        seats: selectedSeats,
        bookedDate: moment().format('DD MMM YYYY'),
        uuid: getRandomUuid(),
      }),
    );

    navigation.navigate('HomeScreen');
  };

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
