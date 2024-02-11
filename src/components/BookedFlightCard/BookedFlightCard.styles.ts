import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: 14,
  },
  separator: {
    height: 14,
  },
  hSpacer: {
    width: 20,
  },
  itemContainer: {
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: COLORS.grey100,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  extraInfoView: {
    borderTopWidth: 1,
    borderColor: COLORS.grey100,
    padding: 12,
  },
  seat: {
    borderWidth: 1,
    height: 26,
    width: 32,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderColor: COLORS.grey200,
    marginBottom: 2,
  },
  seatsView: {
    flexDirection: 'row',
    maxWidth: '55%',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    justifyContent: 'space-between',
  },
});

export default styles;
