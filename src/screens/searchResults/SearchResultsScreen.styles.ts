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
  cityInfoView: {
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
    paddingTop: 12,
  },
  header: {
    zIndex: 10,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: COLORS.grey100,
    width: '100%',
    backgroundColor: COLORS.white100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    padding: 12,
    borderColor: COLORS.grey100,
    paddingTop: 8,
    borderRightWidth: 1,
    alignItems: 'center',
  },
  capsule: {
    borderWidth: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 6,
    width: '100%',
    backgroundColor: COLORS.white,
    borderColor: COLORS.grey200,
  },
  capsuleEnabled: {
    borderWidth: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 6,
    width: '100%',
    backgroundColor: COLORS.primaryBlue,
    borderColor: COLORS.grey200,
  },
  column: {
    padding: 12,
    paddingTop: 8,
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: COLORS.grey100,
  },
  columnTitle: {
    marginBottom: 4,
  },
  airportInfo: {
    borderWidth: 1,
    borderColor: COLORS.grey200,
    width: 70,
    borderRadius: 8,
    padding: 8,
    paddingHorizontal: 4,
    backgroundColor: COLORS.white,
    marginTop: 4,
  },
  airportInfoView: {
    marginRight: 12,
    alignContent: 'space-between',
  },
  dateView: {
    borderWidth: 1,
    borderColor: COLORS.grey100,
    height: 35,
    alignItems: 'center',
    backgroundColor: COLORS.white100,
    justifyContent: 'center',
  },
});

export default styles;
