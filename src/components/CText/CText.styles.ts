import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import {FONTS} from '../../constants/common';

const styles = StyleSheet.create({
  header1: {
    fontFamily: FONTS.LatoBold,
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.blue300,
  },
  header2: {
    fontFamily: FONTS.LatoBold,
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.blue300,
  },
  header3: {
    fontFamily: FONTS.LatoSemiBold,
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.blue300,
  },
  header4: {
    fontFamily: FONTS.LatoMedium,
    fontSize: 20,
    fontWeight: '400',
    color: COLORS.blue300,
  },
  header5: {
    fontFamily: FONTS.LatoRegular,
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.blue300,
  },
  header6: {
    fontFamily: FONTS.LatoRegular,
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.blue300,
  },
});

export default styles;
