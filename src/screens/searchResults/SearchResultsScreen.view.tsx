import {NavigationProp, RouteProp} from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {textToSeconds} from '../../../utils';
import FlightCard from '../../components/FlightCard/FlightCard.view';
import FlightsListPlaceHolder from '../../components/FlightsListPlaceholder/FlightsListPlaceholder.view';
import NoItemsFound from '../../components/NoItemsFound/NoItemsFound.view';
import {HomeNavigationStackType} from '../../navigation/rootNavigation.types';
import {FlightInfo} from '../../redux/reducers/Flights/Flights.reducer.types';
import {getAllFlightsData, isLoadingFlights} from '../../redux/selectors';
import {fetchFlightsAction} from '../../saga/HomeScreen.saga';
import {Header, renderSeparator} from './SearchResultsScreen.components';
import styles from './SearchResultsScreen.styles';

interface SearchResultsScreenProps {
  navigation: NavigationProp<HomeNavigationStackType>;
  route: RouteProp<HomeNavigationStackType, 'SearchResults'>;
}
const keyExtractor = (data: FlightInfo) => data.id;

export type SortOptionsType = 'fare' | 'duration';
export type FilterOptionsType = 'non-stop' | 'one-stop';
export type FilterByAirlineType = 'JetSpice' | 'Air India';
/**  */
const SearchResultsScreen: React.FC<SearchResultsScreenProps> = props => {
  const {route, navigation} = props;
  const {params} = route;

  const flights = useSelector(getAllFlightsData);
  const isLoading = useSelector(isLoadingFlights);
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState<SortOptionsType>('fare');
  const [filterByAirline, setFilterByAirline] =
    useState<FilterByAirlineType>('JetSpice');
  const [flightsList, setFlightsList] = useState<FlightInfo[]>([]);
  const [filterBy, setFilterBy] = useState<FilterOptionsType>('non-stop');

  useEffect(() => {
    dispatch(fetchFlightsAction());
  }, [dispatch]);

  useEffect(() => {
    let tempFlightData = [
      ...flights.filter(
        item =>
          moment(item.displayData.source.depTime).format('DD MMM YYYY') ===
          params.date,
      ),
    ];

    // sort by airline
    tempFlightData = tempFlightData.filter(
      item => item.displayData.airlines[0].airlineName === filterByAirline,
    );

    // sort by selected city
    tempFlightData = tempFlightData.filter(
      item =>
        item.displayData.source.airport.cityCode === params.fromCityCode &&
        item.displayData.destination.airport.cityCode === params.toCityCode,
    );

    if (sortBy === 'duration') {
      tempFlightData.sort((a, b) => {
        return (
          textToSeconds(a.displayData.totalDuration) -
          textToSeconds(b.displayData.totalDuration)
        );
      });
    } else {
      tempFlightData.sort((a, b) => a.fare - b.fare);
    }

    if (filterBy === 'non-stop') {
      setFlightsList(
        tempFlightData.filter(flight => {
          return flight.displayData.stopInfo === 'Non stop';
        }),
      );
    } else {
      setFlightsList(
        tempFlightData.filter(
          flight => flight.displayData.stopInfo === '1 Stop',
        ),
      );
    }
  }, [sortBy, filterBy, flights, filterByAirline]);

  const onPressSortOption = (option: SortOptionsType) => {
    setSortBy(option);
  };

  const onPressFilterOption = (option: FilterOptionsType) => {
    setFilterBy(option);
  };

  const onPressFlight = (flightInfo: FlightInfo) => {
    navigation.navigate('Booking', {flightInfo});
  };

  const renderListItem = ({item}: {item: FlightInfo}) => {
    return <FlightCard data={item} onPress={() => onPressFlight(item)} />;
  };

  return (
    <View style={styles.container}>
      <Header
        date={params.date}
        filterBy={filterBy}
        fromCityCode={params.fromCityCode}
        fromCityName={params.fromCityName}
        toCityCode={params.toCityCode}
        toCityName={params.toCityName}
        onPressFilterOption={onPressFilterOption}
        onPressSortOption={onPressSortOption}
        sortBy={sortBy}
        filterByAirline={filterByAirline}
        onPressFilterByAirlineOption={setFilterByAirline}
      />

      {isLoading ? (
        <FlightsListPlaceHolder />
      ) : (
        <FlatList
          renderItem={renderListItem}
          data={flightsList}
          contentContainerStyle={styles.listContentContainer}
          style={styles.listContainer}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderSeparator}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={NoItemsFound}
        />
      )}
    </View>
  );
};

export default SearchResultsScreen;
