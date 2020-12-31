import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/drawer';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  backgroundColor: 'pink',
  //  alignItems: 'center',
//    justifyContent: 'center',
  //  paddingTop: 200
  },
});
