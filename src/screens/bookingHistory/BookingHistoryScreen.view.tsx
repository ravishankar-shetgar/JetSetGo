import React from 'react';
import {Text, View} from 'react-native';
import styles from './BookingHistoryScreen.styles';

interface BookingHistoryScreenProps {}

/**  */
const BookingHistoryScreen: React.FC<BookingHistoryScreenProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>BookingHistoryScreen</Text>
    </View>
  );
};

export default BookingHistoryScreen;
