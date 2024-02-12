import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    maxHeight: 580,
    width: '100%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    padding: 16,
  },
  header: {
    borderBottomWidth: 1,
    paddingBottom: 12,
    borderColor: COLORS.grey200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spacer1: {
    height: 16,
  },
  calendar: {
    marginBottom: 10,
  },
});

export default styles;
