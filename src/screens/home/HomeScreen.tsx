import React from 'react';
import {Text, View} from 'react-native';
import styles from './HomeScreen.styles';

interface HomeScreenProps {}

/**  */
const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
