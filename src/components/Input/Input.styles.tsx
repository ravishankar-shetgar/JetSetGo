import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import {FONTS} from '../../constants/common';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 14,
    borderColor: COLORS.grey100,
    backgroundColor: COLORS.white,
    paddingLeft: 12,
    height: 54,
  },
  input: {
    color: COLORS.black,
    flex: 1,
    fontSize: 16,
    fontFamily: FONTS.Medium,
  },
  iconView: {
    height: 52,
    width: 52,
    marginLeft: 12,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
