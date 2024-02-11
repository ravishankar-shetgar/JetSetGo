import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenBg,
  },
  separator: {
    height: 14,
  },
  listContentContainer: {
    paddingBottom: 50,
    paddingHorizontal: 18,
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
    marginTop: 12,
  },
  header: {
    borderWidth: 1,
    width: '100%',
  },
});

export default styles;
