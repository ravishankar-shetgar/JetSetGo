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
  spacer1: {
    height: 16,
  },
  cityItem: {
    borderWidth: 1,
    flexDirection: 'row',
    height: 40,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: COLORS.grey200,
    backgroundColor: COLORS.white100,
  },
  cityCode: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: COLORS.yellow100,
  },
});

export default styles;
