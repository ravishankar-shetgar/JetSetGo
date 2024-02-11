import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FlightCard from '../../components/FlightCard/FlightCard.view';
import FlightCardPlaceholder from '../../components/FlightCardPlaceholder/FlightCardPlaceholder.view';
import Input from '../../components/Input/Input.view';
import STRINGS from '../../constants/strings';
import {FlightInfo} from '../../redux/reducers/Flights/Flights.reducer.types';
import {getAllFlightsData, isLoadingFlights} from '../../redux/selectors';
import {fetchFlightsAction} from '../../saga/HomeScreen.saga';
import styles from './HomeScreen.styles';

interface HomeScreenProps {}

const renderListItem = ({item}: {item: FlightInfo}) => {
  return <FlightCard data={item} />;
};

const keyExtractor = (data: FlightInfo) => data.id;

const renderSeparator = () => <View style={styles.separator} />;

/**  */
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const flights = useSelector(getAllFlightsData);
  const isLoading = useSelector(isLoadingFlights);
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

      {isLoading ? (
        <FlightCardPlaceholder />
      ) : (
        <FlatList
          renderItem={renderListItem}
          data={flights}
          contentContainerStyle={styles.listContentContainer}
          style={styles.listContainer}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderSeparator}
          keyboardShouldPersistTaps="handled"
        />
      )}
    </View>
  );
};

export default HomeScreen;
