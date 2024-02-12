import React from 'react';
import {View} from 'react-native';
import {truncateStringInTheEnd} from '../../../utils';
import STRINGS from '../../constants/strings';
import {Booking} from '../../redux/reducers/Bookings/Bookings.reducer.types';
import CText from '../CText/CText.view';
import FlightCard from '../FlightCard/FlightCard.view';
import styles from './BookedFlightCard.styles';

interface BookedFlightCardProps {
  data: Booking;
}

/**  */
const BookedFlightCard: React.FC<BookedFlightCardProps> = props => {
  const {data} = props;

  return (
    <View style={styles.itemContainer}>
      <FlightCard data={data} altStyle={true} />
      <View style={styles.extraInfoView}>
        <View style={styles.row}>
          <CText variant="Header5" fontWeight="700">
            {STRINGS.totalFare}
          </CText>
          <View style={styles.hSpacer} />
          <CText variant="Header5">
            {STRINGS.rupeeSymbol} {data.totalFare}
          </CText>
        </View>

        <View style={styles.row}>
          <CText variant="Header5" fontWeight="700">
            {STRINGS.bookedSeats}
          </CText>
          <View style={styles.hSpacer} />

          <View style={styles.seatsView}>
            {data.seats.map(seat => (
              <View style={styles.seat} key={seat}>
                <CText variant="Header6">{seat.toUpperCase()}</CText>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.row}>
          <CText variant="Header5" fontWeight="700">
            {STRINGS.bookedDate}
          </CText>
          <View style={styles.hSpacer} />
          <CText variant="Header5">{data.bookedDate}</CText>
        </View>

        <View style={styles.row}>
          <CText variant="Header5" fontWeight="700">
            {STRINGS.airportName}
          </CText>
          <View style={styles.hSpacer} />
          <CText variant="Header5">
            {truncateStringInTheEnd(
              data.displayData.source.airport.airportName,
              30,
            )}
          </CText>
        </View>

        <View style={styles.row}>
          <CText variant="Header5" fontWeight="700">
            {STRINGS.terminalNumber}
          </CText>
          <View style={styles.hSpacer} />
          <CText variant="Header5">
            {data.displayData.source.airport.terminal}
          </CText>
        </View>
      </View>
    </View>
  );
};

export default BookedFlightCard;
