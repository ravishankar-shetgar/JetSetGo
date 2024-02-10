import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeNavigationStack from './src/navigation/navigationStacks';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <HomeNavigationStack />
    </NavigationContainer>
  );
}

export default App;
