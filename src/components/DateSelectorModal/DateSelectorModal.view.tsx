import moment from 'moment';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import {Theme} from 'react-native-calendars/src/types';
import ReactNativeModal from 'react-native-modal';
import COLORS from '../../constants/colors';
import {FONTS} from '../../constants/common';
import STRINGS from '../../constants/strings';
import Button from '../Button/Button.view';
import styles from './DateSelectorModal.styles';

interface DateSelectorModalProps {
  closeModal: () => void;
  setDate: (date: string) => void;
}

const calendarTheme: Theme = {
  textDayFontFamily: FONTS.Regular,
  textMonthFontFamily: FONTS.Medium,
  textDayHeaderFontFamily: FONTS.Medium,
  textDayFontSize: 18,
  textMonthFontSize: 18,
  textDayHeaderFontSize: 14,
  todayBackgroundColor: COLORS.blue200,
  todayTextColor: COLORS.white,
  todayButtonFontFamily: FONTS.Bold,
};

const DateSelectorModal: React.FC<DateSelectorModalProps> = props => {
  const {closeModal, setDate} = props;

  const currentDate = moment('2023-03-31T12:35').format('YYYY-MM-DD');
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const onPressCancel = () => {
    closeModal();
  };

  const onSelectDate = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  const onPressApply = async () => {
    setDate(selectedDate);
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
        <Calendar
          style={styles.calendar}
          onDayPress={onSelectDate}
          current={currentDate}
          markedDates={{
            [selectedDate]: {selected: true},
          }}
          theme={calendarTheme}
        />

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

export default React.memo(DateSelectorModal);
