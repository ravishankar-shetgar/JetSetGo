import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.screenBg,
  },
  listContentContainer: {
    paddingBottom: 50,
    paddingHorizontal: 24,
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
    marginTop: 12,
  },
  separator: {
    height: 14,
  },
});

export default styles;
