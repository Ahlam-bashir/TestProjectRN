import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomePage from './src/Screens/HomePage';
import SearchPage from './src/Screens/SearchPage';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
const [showSearch,setShowSearch]=useState(false)
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.sectionContainer}>
       
       {showSearch ?
       <SearchPage showSearch={showSearch} setShowSearch={setShowSearch}/>:
       <HomePage showSearch={showSearch} setShowSearch={setShowSearch}/>}
      </View>
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
   padding:16,
   flex:1,
  },
  
});

export default App;
