import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import Button from '../../components/Button/Button.view';
import CText from '../../components/CText/CText.view';
import Input from '../../components/Input/Input.view';
import STRINGS from '../../constants/strings';
import {HomeNavigationStackType} from '../../navigation/rootNavigation.types';
import styles from './HomeScreen.styles';

interface HomeScreenProps {
  navigation: NavigationProp<HomeNavigationStackType>;
}

/**  */
const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {navigation} = props;

  const [sourceInput, setSourceInput] = useState('');
  const [destinationInput, setDestinationInput] = useState('');

  const onPressSearch = () => {
    navigation.navigate('SearchResults', {
      fromCityCode: 'DEL',
      fromCityName: 'Delhi',
      toCityCode: 'BOM',
      toCityName: 'Mumbai',
      date: '31 Mar 2023',
    });
  };

  return (
    <View style={styles.container}>
      <CText variant="Header1">Hi,</CText>
      <CText variant="Header1">Ravishankar</CText>

      <Input
        value={sourceInput}
        setInputValue={setSourceInput}
        placeholder={STRINGS.enterSource}
        inputValidator={text => text.includes('rv')}
      />

      <Input
        value={destinationInput}
        setInputValue={setDestinationInput}
        placeholder={STRINGS.enterDestination}
      />

      <Button
        title={STRINGS.search}
        onPress={onPressSearch}
        variant="enabled"
      />
    </View>
  );
};

export default HomeScreen;
