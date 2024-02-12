import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import COLORS from '../../constants/colors';
import {CITIES_LIST} from '../../constants/common';
import STRINGS from '../../constants/strings';
import Button from '../Button/Button.view';
import CText from '../CText/CText.view';
import styles from './CitySelector.styles';

interface CitySelectorProps {
  closeModal: () => void;
  citiesList: typeof CITIES_LIST;
  setArrivalCity: (cityCode: string) => void;
  setDepartureCity: (cityCode: string) => void;
  inputType: 'source' | 'dest' | '';
}

/**  */
const CitySelector: React.FC<CitySelectorProps> = props => {
  const {closeModal, citiesList, setArrivalCity, setDepartureCity, inputType} =
    props;

  const [selectedCity, setSelectedCity] = useState('');

  const onPressCancel = () => {
    closeModal();
  };

  const onPressApply = () => {
    if (inputType === 'dest') {
      setArrivalCity(selectedCity);
    } else {
      setDepartureCity(selectedCity);
    }
    closeModal();
  };

  return (
    <ReactNativeModal
      isVisible={true}
      onDismiss={closeModal}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      animationIn={'slideInUp'}>
      <View style={styles.container}>
        <CText variant="Header4">{STRINGS.selectCity}</CText>

        <View style={styles.spacer1} />

        {citiesList.map(item => (
          <TouchableOpacity
            key={item.cityCode}
            activeOpacity={0.7}
            style={[
              styles.cityItem,
              selectedCity === item.cityCode
                ? {backgroundColor: COLORS.lightBlue}
                : {},
            ]}
            onPress={() => setSelectedCity(item.cityCode)}>
            <View style={styles.cityCode}>
              <CText variant="Header6">{item.cityCode}</CText>
            </View>
            <CText variant="Header6">{item.cityName}</CText>
          </TouchableOpacity>
        ))}

        <View style={styles.spacer1} />

        <Button
          title={STRINGS.select}
          variant={'enabled'}
          onPress={onPressApply}
        />

        <View style={styles.spacer1} />

        <Button
          title={STRINGS.cancel}
          variant="enabled"
          onPress={onPressCancel}
        />
      </View>
    </ReactNativeModal>
  );
};

export default CitySelector;
