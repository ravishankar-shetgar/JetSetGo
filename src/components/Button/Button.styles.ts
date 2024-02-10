import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  filledButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: COLORS.blue200,
  },
  disabledButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    opacity: 0.8,
    backgroundColor: COLORS.grey300,
  },
});

export default styles;
