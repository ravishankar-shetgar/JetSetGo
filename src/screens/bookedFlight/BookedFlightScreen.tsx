import React from 'react';
import {Text, View} from 'react-native';
import styles from './BookedFlightScreen.styles';

interface BookedFlightScreenProps {}

/**  */
const BookedFlightScreen: React.FC<BookedFlightScreenProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>BookedFlightScreen</Text>
    </View>
  );
};

export default BookedFlightScreen;
