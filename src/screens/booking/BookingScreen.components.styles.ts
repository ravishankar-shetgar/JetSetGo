import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderColor: COLORS.grey100,
    borderWidth: 1,
    width: '100%',
    padding: 14,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  selectedSeatsDisplay: {
    marginTop: 12,
  },
  btnContainerView: {
    marginTop: 18,
  },
  seatIcon: {
    borderColor: COLORS.grey200,
    borderWidth: 1,
    borderRadius: 10,
    width: 65,
    height: 55,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatSectionContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  rightSeatIcon: {
    marginLeft: 14,
  },
  seatSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default styles;
