import moment from 'moment';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import COLORS from '../../constants/colors';
import {
  FlightLandingIcon,
  FlightTakeOffIcon,
  PlaneIcon,
} from '../../constants/icons';
import {AirIndia, SpiceJet} from '../../constants/images';
import STRINGS from '../../constants/strings';
import {FlightInfo} from '../../redux/reducers/Flights/Flights.reducer.types';
import CText from '../CText/CText.view';
import {styles} from './FlightCard.styles';

interface FlightCardProps {
  data: FlightInfo;
  onPress?: () => void;
  altStyle?: boolean;
}

interface FlightDateProps {
  iconVariant: 'takeOff' | 'landing';
  date: string;
}

const FlightDate: React.FC<FlightDateProps> = ({iconVariant, date}) => {
  return (
    <View style={styles.flightDateView}>
      {iconVariant === 'takeOff' ? (
        <FlightTakeOffIcon style={styles.flightIcon} width={18} height={18} />
      ) : (
        <FlightLandingIcon style={styles.flightIcon} width={18} height={18} />
      )}
      <CText variant={'Header6'} color={COLORS.grey300}>
        {date}
      </CText>
    </View>
  );
};

const AirportName = ({
  cityName,
  cityCode,
  align,
}: {
  cityName: string;
  cityCode: string;
  align: 'left' | 'right';
}) => {
  return (
    <View
      style={[
        styles.cityInfoView,
        align === 'right' ? {alignItems: 'flex-end'} : {},
      ]}>
      <CText variant={'Header6'}>{cityName}</CText>
      <CText variant={'Header2'}>{cityCode}</CText>
    </View>
  );
};

const FlightDuration = ({duration}: {duration: string}) => {
  return (
    <View style={styles.flightDurationView}>
      <CText variant={'Header6'}>{duration}</CText>
    </View>
  );
};

const FareInfo = ({fare}: {fare: number}) => {
  return (
    <View style={styles.fareInfoView}>
      <CText variant={'Header6'}>
        {STRINGS.rupeeSymbol} {fare}
      </CText>
    </View>
  );
};

const AirlinesIcon = ({airlineCode}: {airlineCode: string}) => {
  switch (airlineCode) {
    case 'AB':
      return <Image style={styles.airlineIcon} source={SpiceJet} />;
    case 'CD':
      return <Image source={AirIndia} style={styles.airlineIcon} />;
  }
};

const FlightLineView = ({stopInfo}: {stopInfo: string}) => {
  if (stopInfo !== 'Non stop') {
    return (
      <View style={styles.flightLineContainer}>
        <View style={styles.dot} />
        <View style={styles.line} />
        <View style={styles.dot} />
        <View style={styles.line} />
        <PlaneIcon height={26} width={26} />
      </View>
    );
  } else {
    return (
      <View style={styles.flightLineContainer}>
        <View style={styles.dot} />
        <View style={styles.line} />
        <PlaneIcon height={26} width={26} />
      </View>
    );
  }
};

const FlightCard: React.FC<FlightCardProps> = props => {
  const {data, onPress, altStyle} = props;

  if (!data) {
    return null;
  }

  const {displayData, fare} = data;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={altStyle ? styles.altContainer : styles.container}
      activeOpacity={0.7}>
      <View style={styles.airlineInfoRow}>
        <View style={styles.airlineIconView}>
          <AirlinesIcon airlineCode={displayData.airlines[0].airlineCode} />
        </View>

        <View style={styles.airlineInfoView}>
          <CText variant={'Header5'}>
            {displayData.airlines[0].airlineCode +
              ' ' +
              displayData.airlines[0].flightNumber}
          </CText>

          <CText variant={'Header6'} color={COLORS.grey300}>
            {displayData.airlines[0].airlineName}
          </CText>
        </View>

        <FlightDuration duration={displayData.totalDuration} />
        <FareInfo fare={fare} />
      </View>

      <View style={styles.flightInfoContainer}>
        <View style={styles.flightDateRow}>
          <FlightDate
            iconVariant="takeOff"
            date={moment(displayData.source.depTime).format('DD MMM YYYY')}
          />

          <FlightDate
            iconVariant="landing"
            date={moment(displayData.destination.arrTime).format('DD MMM YYYY')}
          />
        </View>

        <View style={styles.airportNameRow}>
          <AirportName
            cityCode={displayData.source.airport.cityCode}
            cityName={displayData.source.airport.cityName}
            align="left"
          />

          <FlightLineView stopInfo={displayData.stopInfo} />

          <AirportName
            cityCode={displayData.destination.airport.cityCode}
            cityName={displayData.destination.airport.cityName}
            align="right"
          />
        </View>

        <View style={styles.flightTimesRow}>
          <CText variant={'Header5'} color={COLORS.grey300}>
            {moment(displayData.source.depTime).format('HH:mm a')}
          </CText>

          <CText variant={'Header5'} color={COLORS.grey300}>
            {moment(displayData.destination.arrTime).format('HH:mm a')}
          </CText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(FlightCard);
