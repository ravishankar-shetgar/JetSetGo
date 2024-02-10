import React from 'react';
import {View} from 'react-native';
import Button from '../../components/Button/Button.view';
import CText from '../../components/CText/CText.view';
import styles from './HomeScreen.styles';

interface HomeScreenProps {}

/**  */
const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <CText variant="Header1">HomeScreen</CText>
      <CText variant="Header2">HomeScreen</CText>
      <CText variant="Header3">HomeScreen</CText>
      <CText variant="Header4">HomeScreen</CText>
      <CText variant="Header5">HomeScreen</CText>
      <CText variant="Header6">HomeScreen</CText>
      <Button title="Press this button" variant="enabled" onPress={() => {}} />
    </View>
  );
};

export default HomeScreen;
