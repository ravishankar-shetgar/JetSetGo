import React from 'react';
import {Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import COLORS from '../../constants/colors';

interface FlightCardPlaceholderProps {}

/**  */
const FlightCardPlaceholder: React.FC<FlightCardPlaceholderProps> = props => {
  const {} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 160,
        width: '100%',
        borderWidth: 1,
        backgroundColor: COLORS.white,
      }}>
      <SkeletonPlaceholder borderRadius={4}>
        <View>
          <View style={{width: 60, height: 60, borderRadius: 50}} />
          <View style={{marginLeft: 20}}>
            <Text style={{marginTop: 6, fontSize: 14, lineHeight: 18}}>
              Hello world
            </Text>
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default FlightCardPlaceholder;
