import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './FlightsListPlaceholder.styles';

const FlightCardPlaceholder = () => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            padding={12}
            alignItems="center"
            borderBottomWidth={1}
            paddingBottom={8}
            justifyContent="space-between">
            <SkeletonPlaceholder.Item
              width={90}
              height={36}
              borderRadius={10}
            />

            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width={60}
                height={34}
                borderRadius={20}
                marginRight={8}
              />
              <SkeletonPlaceholder.Item
                width={60}
                height={34}
                borderRadius={20}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            marginTop={12}
            flexDirection="row"
            paddingHorizontal={12}
            alignItems="center"
            justifyContent="space-between">
            <SkeletonPlaceholder.Item width={70} height={25} borderRadius={8} />
            <SkeletonPlaceholder.Item width={70} height={25} borderRadius={8} />
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            flexDirection="row"
            paddingHorizontal={12}
            marginTop={8}
            alignItems="center"
            justifyContent="space-between">
            <SkeletonPlaceholder.Item
              width={130}
              height={60}
              borderRadius={8}
            />
            <SkeletonPlaceholder.Item
              width={130}
              height={60}
              borderRadius={8}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

const FlightsListPlaceHolder = () => {
  return (
    <View style={styles.row}>
      {[1, 2, 3, 4, 5, 6].map(item => (
        <FlightCardPlaceholder key={item} />
      ))}
    </View>
  );
};

export default React.memo(FlightsListPlaceHolder);
