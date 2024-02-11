import React from 'react';
import {Image, View} from 'react-native';
import COLORS from '../../constants/colors';
import {Restrictions} from '../../constants/images';
import STRINGS from '../../constants/strings';
import CText from '../CText/CText.view';
import styles from './NoItemsFound.styles';

const NoItemsFound = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Restrictions} />
      <CText variant="Header3" color={COLORS.grey600}>
        {STRINGS.noFlightsFound}
      </CText>

      <View style={styles.vSpacing} />
    </View>
  );
};

export default NoItemsFound;
