import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CText from '../../components/CText/CText.view';
import {getAllFlightsData} from '../../redux/selectors';
import {fetchFlightsAction} from '../../saga/HomeScreen.saga';
import styles from './HomeScreen.styles';

interface HomeScreenProps {}

/**  */
const HomeScreen: React.FC<HomeScreenProps> = props => {
  const flights = useSelector(getAllFlightsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlightsAction());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {flights.map(item => {
          return (
            <View key={item.id} style={{borderWidth: 1, marginVertical: 8}}>
              <CText variant="Header6">{JSON.stringify(item)}</CText>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
