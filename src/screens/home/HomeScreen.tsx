import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CText from '../../components/CText/CText.view';
import Input from '../../components/Input/Input.view';
import STRINGS from '../../constants/strings';
import {getAllFlightsData} from '../../redux/selectors';
import {fetchFlightsAction} from '../../saga/HomeScreen.saga';
import styles from './HomeScreen.styles';

interface HomeScreenProps {}

/**  */
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const flights = useSelector(getAllFlightsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlightsAction());
  }, []);

  const [sourceInput, setSourceInput] = useState('');
  const [destinationInput, setDestinationInput] = useState('');

  return (
    <View style={styles.container}>
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

      <ScrollView>
        {flights.map(item => {
          return (
            <View key={item.id} style={{borderWidth: 1, marginVertical: 8}}>
              <CText variant="Header6">{JSON.stringify(item)}</CText>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
