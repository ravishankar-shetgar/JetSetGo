import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: COLORS.screenBg,
  },
  header: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderColor: COLORS.grey200,
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: COLORS.white,
  },
  text: {
    padding: 4,
    marginBottom: 12,
  },
  vSpacer: {
    height: 12,
  },
  appIcon: {
    height: 50,
    width: 50,
    overflow: 'hidden',
    borderRadius: 12,
  },
  spacer: {
    flex: 1,
  },
  footerImage: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    height: 300,
    borderRadius: 12,
  },
  button: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.grey100,
    backgroundColor: COLORS.white,
    paddingLeft: 12,
    height: 50,
  },
});

export default styles;
