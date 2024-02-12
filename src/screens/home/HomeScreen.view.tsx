import {NavigationProp} from '@react-navigation/native';
import moment from 'moment';
import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Button from '../../components/Button/Button.view';
import CText from '../../components/CText/CText.view';
import CitySelector from '../../components/CitySelector/CitySelector.view';
import DateSelectorModal from '../../components/DateSelectorModal/DateSelectorModal.view';
import {CITIES_LIST} from '../../constants/common';
import {AppIcon, Flight} from '../../constants/images';
import STRINGS from '../../constants/strings';
import {HomeNavigationStackType} from '../../navigation/rootNavigation.types';
import styles from './HomeScreen.styles';

interface HomeScreenProps {
  navigation: NavigationProp<HomeNavigationStackType>;
}

const getCityNameFromCode = (code: string) => {
  return CITIES_LIST.find(item => item.cityCode === code)?.cityName || '';
};

/**  */
const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {navigation} = props;

  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showCitySelector, setShowCitySelector] = useState<
    'source' | 'dest' | ''
  >('');

  const onPressSearch = () => {
    navigation.navigate('SearchResults', {
      fromCityCode: departureCity,
      fromCityName: getCityNameFromCode(departureCity),
      toCityCode: arrivalCity,
      toCityName: getCityNameFromCode(arrivalCity),
      date: moment(selectedDate).format('DD MMM YYYY'),
    });

    setDepartureCity('');
    setArrivalCity('');
    setSelectedDate('');
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  const onPressSelectDate = () => {
    setShowCalendar(true);
  };

  const onPressSelectDepartureCity = () => {
    setShowCitySelector('source');
  };
  const onPressSelectArrivalCity = () => {
    setShowCitySelector('dest');
  };

  const closeCitySelector = () => {
    setShowCitySelector('');
  };

  const allowSearch =
    arrivalCity.length > 0 &&
    departureCity.length > 0 &&
    selectedDate.length > 0 &&
    arrivalCity !== departureCity;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={AppIcon} style={styles.appIcon} />
        <CText variant="Header1">{STRINGS.appName}</CText>
      </View>

      <View style={styles.vSpacer} />

      <TouchableOpacity
        style={styles.button}
        onPress={onPressSelectDepartureCity}>
        {departureCity.length > 0 ? (
          <>
            <View style={styles.cityCode}>
              <CText variant="Header6">{departureCity}</CText>
            </View>
            <CText variant="Header6">
              {getCityNameFromCode(departureCity)}
            </CText>
          </>
        ) : (
          <CText variant="Header5" fontWeight="600">
            {STRINGS.selectDeparture}
          </CText>
        )}
      </TouchableOpacity>

      <View style={styles.vSpacer} />

      <TouchableOpacity
        style={styles.button}
        onPress={onPressSelectArrivalCity}>
        {arrivalCity.length > 0 ? (
          <>
            <View style={styles.cityCode}>
              <CText variant="Header6">{arrivalCity}</CText>
            </View>
            <CText variant="Header6">{getCityNameFromCode(arrivalCity)}</CText>
          </>
        ) : (
          <CText variant="Header5" fontWeight="600">
            {STRINGS.selectArrival}
          </CText>
        )}
      </TouchableOpacity>

      <View style={styles.vSpacer} />

      <TouchableOpacity style={styles.button} onPress={onPressSelectDate}>
        <CText variant="Header5" fontWeight="600">
          {selectedDate.length > 0
            ? moment(selectedDate).format('DD MMM YYYY')
            : STRINGS.selectDate}
        </CText>
      </TouchableOpacity>

      <View style={styles.vSpacer} />

      <Button
        title={STRINGS.search}
        onPress={onPressSearch}
        variant={allowSearch ? 'enabled' : 'disabled'}
      />

      <View style={styles.spacer} />
      <Image source={Flight} style={styles.footerImage} />

      {showCalendar ? (
        <DateSelectorModal
          closeModal={closeCalendar}
          setDate={setSelectedDate}
        />
      ) : null}

      {showCitySelector.length > 0 ? (
        <CitySelector
          citiesList={CITIES_LIST}
          closeModal={closeCitySelector}
          setArrivalCity={setArrivalCity}
          inputType={showCitySelector}
          setDepartureCity={setDepartureCity}
        />
      ) : null}
    </View>
  );
};

export default HomeScreen;
