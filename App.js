import React from 'react';
import { StyleSheet, StatusBar, View, SafeAreaView,Text } from 'react-native';
import Header from './src/Header/Header';
import Content from './src/Content/Content';
import Footer from './src/Footer/Footer';
import Calculadora from './src/Content/Calculadora';

export default function App() {
  return (
   
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <Calculadora></Calculadora>
      <Footer></Footer>
      <StatusBar style="auto" />
    </SafeAreaView>
    
   
  );
}
 const styles  = StyleSheet.create({
   container: {
     flex:1,
     flexDirection: 'column',
     alignItems: 'center',
   },
 });
