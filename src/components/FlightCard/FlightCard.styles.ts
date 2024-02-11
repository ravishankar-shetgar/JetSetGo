import {Platform, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderColor: COLORS.grey100,
    borderWidth: 1,
    overflow: 'hidden',
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
        elevation: 2,
      },
    }),
  },
  altContainer: {
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },
  airlineInfoRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 12,
    justifyContent: 'center',
    borderColor: COLORS.grey100,
  },
  flightDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flightIcon: {
    marginRight: 5,
  },
  airportNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  flightInfoContainer: {
    padding: 12,
  },
  flightDateView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flightDurationView: {
    backgroundColor: COLORS.lightBlue100,
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 30,
    justifyContent: 'center',
    marginRight: 8,
    alignItems: 'center',
  },
  flightTimesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  airlineIconView: {
    height: 36,
    width: 36,
    borderWidth: 1,
    borderColor: COLORS.grey100,
    marginRight: 12,
    borderRadius: 12,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  airlineIcon: {
    height: 35,
    width: 35,
    overflow: 'hidden',
  },
  airlineInfoView: {
    flex: 1,
    justifyContent: 'center',
  },
  cityInfoView: {
    marginBottom: 2,
  },
  fareInfoView: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flightLineContainer: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: COLORS.grey200,
    borderRadius: 100,
  },
  line: {
    height: 5,
    backgroundColor: COLORS.grey100,
    flex: 1,
    marginHorizontal: 2,
  },
});
