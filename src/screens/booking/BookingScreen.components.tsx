import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import ButtonView from '../../components/Button/Button.view';
import CText from '../../components/CText/CText.view';
import COLORS from '../../constants/colors';
import {SEATS_LIST} from '../../constants/common';
import STRINGS from '../../constants/strings';
import styles from './BookingScreen.components.styles';

interface SeatIconProps {
  seatNumber: string;
  selectedSeats: string[];
  onPressSeat: (seatNum: string) => void;
}

export const SeatIcon: React.FC<SeatIconProps> = ({
  seatNumber,
  selectedSeats,
  onPressSeat,
}) => {
  const isSelectedSeat = selectedSeats.includes(seatNumber);
  const bgColor = isSelectedSeat ? COLORS.lightBlue : COLORS.white;

  const onPress = () => {
    onPressSeat(seatNumber);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.seatIcon,
        backgroundColor: bgColor,
      }}>
      <CText variant="Header5">{seatNumber.toUpperCase()}</CText>
    </TouchableOpacity>
  );
};

const SeatsColumn = ({
  seatRow,
  onPressSeat,
  selectedSeats,
}: {
  seatRow: string[];
  selectedSeats: string[];
  onPressSeat: (seatNum: string) => void;
}) => {
  return (
    <View style={styles.seatSectionContainer}>
      <SeatIcon
        selectedSeats={selectedSeats}
        onPressSeat={onPressSeat}
        key={seatRow[0]}
        seatNumber={seatRow[0]}
      />
      <View style={styles.rightSeatIcon}>
        <SeatIcon
          selectedSeats={selectedSeats}
          onPressSeat={onPressSeat}
          key={seatRow[1]}
          seatNumber={seatRow[1]}
        />
      </View>
    </View>
  );
};

export const SeatSelector = ({
  selectedSeats,
  setSelectedSeats,
}: {
  selectedSeats: string[];
  setSelectedSeats: (seatNumbers: string[]) => void;
}) => {
  const seatsSectionOne = SEATS_LIST.slice(0, 5);
  const seatsSectionTwo = SEATS_LIST.slice(5, 10);

  const onPressSeat = (seatNum: string) => {
    const indexOfSelectedSeat = selectedSeats.indexOf(seatNum);

    if (indexOfSelectedSeat !== -1) {
      selectedSeats.splice(indexOfSelectedSeat, 1);
    } else {
      selectedSeats.push(seatNum);
    }

    setSelectedSeats([...selectedSeats]);
  };

  return (
    <View style={styles.seatSelectorContainer}>
      <View>
        {seatsSectionOne.map(seatRow => (
          <SeatsColumn
            seatRow={seatRow}
            key={seatRow[0]}
            selectedSeats={selectedSeats}
            onPressSeat={onPressSeat}
          />
        ))}
      </View>

      <View>
        {seatsSectionTwo.map(seatRow => (
          <SeatsColumn
            seatRow={seatRow}
            key={seatRow[0]}
            selectedSeats={selectedSeats}
            onPressSeat={onPressSeat}
          />
        ))}
      </View>
    </View>
  );
};

export const SummaryCard = ({
  fare,
  onPressBook,
  selectedSeats,
}: {
  selectedSeats: string[];
  fare: number;
  onPressBook: () => void;
}) => {
  const selectedSeatDisplayLimit = 7;
  const numberOfSeatsSelected = selectedSeats.length;
  const noSeatsSelected = numberOfSeatsSelected === 0;

  const seatsText =
    numberOfSeatsSelected > 1 ? STRINGS.selectedSeats : STRINGS.selectedSeat;

  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <View>
          <CText variant="Header5" fontWeight="700" color={COLORS.grey500}>
            {seatsText}:
          </CText>
          <View style={styles.selectedSeatsDisplay}>
            <CText variant="Header5">
              {!noSeatsSelected ? (
                selectedSeats.map((seat, index) => {
                  if (index < selectedSeatDisplayLimit) {
                    return (
                      <CText
                        key={seat}
                        variant="Header5"
                        color={COLORS.grey600}>
                        {seat.toUpperCase()}
                        {index < numberOfSeatsSelected - 1 &&
                          index < selectedSeatDisplayLimit - 1 &&
                          ', '}
                      </CText>
                    );
                  }
                })
              ) : (
                <CText variant="Header5" color={COLORS.grey600}>
                  {STRINGS.dashSymbol}
                </CText>
              )}

              {numberOfSeatsSelected > selectedSeatDisplayLimit && (
                <CText variant="Header5" color={COLORS.grey600}>
                  {STRINGS.ellipsisSymbol}
                </CText>
              )}
            </CText>
          </View>
        </View>

        <CText variant="Header2" color={COLORS.primaryGreen}>
          {STRINGS.rupeeSymbol} {numberOfSeatsSelected * fare}
        </CText>
      </View>

      <View style={styles.btnContainerView}>
        <ButtonView
          title={STRINGS.bookTicket}
          variant={noSeatsSelected ? 'disabled' : 'enabled'}
          onPress={onPressBook}
        />
      </View>
    </View>
  );
};
