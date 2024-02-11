import React from 'react';
import {Text, View} from 'react-native';
import styles from './BookingScreen.styles';

interface BookingScreenProps {}

/**  */
const BookingScreen: React.FC<BookingScreenProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>BookingScreen</Text>
    </View>
  );
};

export default BookingScreen;
