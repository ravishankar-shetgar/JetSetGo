import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 50,
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
  },
  seatsView: {
    flexDirection: 'row',
    borderWidth: 1,
    maxWidth: '60%',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    justifyContent: 'space-between',
  },
});

export default styles;
