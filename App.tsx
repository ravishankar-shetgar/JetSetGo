import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import HomeNavigationStack from './src/navigation/rootNavigation';
import Store from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <HomeNavigationStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
