import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { newdata } from './src/services/newdata';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>{
      <ScrollView>
        <View style={styles.container}>
          {newdata}
        </View>
      </ScrollView>
    }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});