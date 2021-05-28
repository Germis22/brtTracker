/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tab from './tabs/tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tab/>
    </NavigationContainer>
  );
};

export default App;
