import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import BookedFlightCard from '../../components/BookedFlightCard/BookedFlightCard.view';
import {Booking} from '../../redux/reducers/Bookings/Bookings.reducer.types';
import {getBookedFlights} from '../../redux/selectors';
import styles from './BookingHistoryScreen.styles';

interface BookingHistoryScreenProps {}

const renderBookingCard = ({item}: {item: Booking}) => (
  <BookedFlightCard data={item} />
);

const keyExtractor = (data: Booking) => data.uuid;
export const renderSeparator = () => <View style={styles.separator} />;

/**  */
const BookingHistoryScreen: React.FC<BookingHistoryScreenProps> = props => {
  const {} = props;

  const bookedFlights = useSelector(getBookedFlights);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        renderItem={renderBookingCard}
        keyExtractor={keyExtractor}
        data={bookedFlights}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default BookingHistoryScreen;
