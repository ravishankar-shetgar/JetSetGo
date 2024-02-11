import {Dimensions, Platform, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: 18,
    borderColor: COLORS.grey100,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      },
    }),
    height: 180,
    width: Dimensions.get('screen').width - 36,
    backgroundColor: COLORS.white,
    marginTop: 12,
  },
  row: {
    flex: 1,
  },
});

export default styles;
