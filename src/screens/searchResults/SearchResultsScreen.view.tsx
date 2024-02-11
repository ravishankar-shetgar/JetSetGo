import {NavigationProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FlightCard from '../../components/FlightCard/FlightCard.view';
import FlightsListPlaceHolder from '../../components/FlightsListPlaceholder/FlightsListPlaceholder.view';
import {HomeNavigationStackType} from '../../navigation/rootNavigation.types';
import {FlightInfo} from '../../redux/reducers/Flights/Flights.reducer.types';
import {getAllFlightsData, isLoadingFlights} from '../../redux/selectors';
import {fetchFlightsAction} from '../../saga/HomeScreen.saga';
import styles from './SearchResultsScreen.styles';

interface SearchResultsScreenProps {
  navigation: NavigationProp<HomeNavigationStackType>;
}

const renderListItem = ({item}: {item: FlightInfo}) => {
  return <FlightCard data={item} />;
};

const keyExtractor = (data: FlightInfo) => data.id;

const renderSeparator = () => <View style={styles.separator} />;

/**  */
const SearchResultsScreen: React.FC<SearchResultsScreenProps> = props => {
  const {navigation} = props;

  const flights = useSelector(getAllFlightsData);
  const isLoading = useSelector(isLoadingFlights);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlightsAction());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View></View>
      </View>

      {isLoading ? (
        <FlightsListPlaceHolder />
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

export default SearchResultsScreen;
