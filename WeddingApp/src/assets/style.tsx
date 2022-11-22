import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import color from './color';

export const appWidth = Dimensions.get('window').width - 36;
export const screenWidth = Dimensions.get('window').width 
const globalStyles = StyleSheet.create({
  app: {
    padding: 16,
    height: '100%',
    backgroundColor: color.white,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
});

export default globalStyles;
