import React from 'react';
import {Text, View} from 'react-native';
import styles from './IntroScreen.styles';

interface IntroScreenProps {}

/**  */
const IntroScreen: React.FC<IntroScreenProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>IntroScreen</Text>
    </View>
  );
};

export default IntroScreen;
