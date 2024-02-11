import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import CText from '../../components/CText/CText.view';
import COLORS from '../../constants/colors';
import STRINGS from '../../constants/strings';
import styles from './SearchResultsScreen.styles';
import {FilterOptionsType, SortOptionsType} from './SearchResultsScreen.view';

export const AirportName = ({
  cityName,
  cityCode,
}: {
  cityName: string;
  cityCode: string;
}) => {
  return (
    <View style={styles.cityInfoView}>
      <CText variant={'Header6'}>{cityName}</CText>
      <CText variant={'Header4'} fontWeight="800">
        {cityCode}
      </CText>
    </View>
  );
};

export const renderSeparator = () => <View style={styles.separator} />;

const Capsule = ({
  text,
  isSelected,
  onPress,
  value,
}: {
  text: string;
  isSelected: boolean;
  onPress: (text: SortOptionsType | FilterOptionsType) => void;
  value: SortOptionsType | FilterOptionsType;
}) => {
  const style = isSelected ? styles.capsuleEnabled : styles.capsule;
  const textColor = isSelected ? COLORS.white : undefined;

  const onPressCapsule = () => {
    onPress(value);
  };

  return (
    <TouchableOpacity onPress={onPressCapsule} style={style}>
      <CText variant="Header6" color={textColor}>
        {text}
      </CText>
    </TouchableOpacity>
  );
};

export const Header = ({
  fromCityCode,
  fromCityName,
  toCityCode,
  toCityName,
  date,
  onPressSortOption,
  sortBy,
  filterBy,
  onPressFilterOption,
}: {
  fromCityCode: string;
  fromCityName: string;
  toCityCode: string;
  toCityName: string;
  date: string;
  onPressSortOption: (sortBy: string) => void;
  sortBy: SortOptionsType;
  filterBy: FilterOptionsType;
  onPressFilterOption: (filterBy: string) => void;
}) => {
  return (
    <>
      <View style={styles.header}>
        <View>
          <View style={styles.row}>
            <View style={styles.airportInfoView}>
              <CText variant="Header6" fontWeight="800">
                {STRINGS.from}
              </CText>

              <View style={styles.airportInfo}>
                <AirportName cityCode={fromCityCode} cityName={fromCityName} />
              </View>
            </View>

            <View>
              <CText variant="Header6" fontWeight="800">
                {STRINGS.to}
              </CText>

              <View style={styles.airportInfo}>
                <AirportName cityCode={toCityCode} cityName={toCityName} />
              </View>
            </View>
          </View>

          <View style={styles.dateView}>
            <CText variant="Header5" fontWeight="500">
              {date}
            </CText>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.columnTitle}>
            <CText variant="Header6" fontWeight="800">
              {STRINGS.sortBy}
            </CText>
          </View>

          <Capsule
            text={STRINGS.fare}
            isSelected={sortBy === 'fare'}
            onPress={onPressSortOption}
            value={'fare'}
          />

          <Capsule
            text={STRINGS.duration}
            isSelected={sortBy === 'duration'}
            onPress={onPressSortOption}
            value={'duration'}
          />
        </View>
        <View style={styles.column}>
          <View style={styles.columnTitle}>
            <CText variant="Header6" fontWeight="800">
              {STRINGS.filterBy}
            </CText>
          </View>

          <Capsule
            text={STRINGS.nonStopFlight}
            isSelected={filterBy === 'non-stop'}
            onPress={onPressFilterOption}
            value={'non-stop'}
          />

          <Capsule
            text={STRINGS.singleStopFlight}
            isSelected={filterBy === 'one-stop'}
            onPress={onPressFilterOption}
            value={'one-stop'}
          />
        </View>
      </View>
    </>
  );
};
