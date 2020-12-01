import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import Card from '../components/Card';
import products from '../json/products.json';

export const newdata = products.map((product) => {
  
  return (
    <Card titulo={product.name}>
      <Text>{product.price}</Text>
      <Image source={{uri: '../assets/'+product.image}}/>
    </Card>
  );
});
const styles = StyleSheet.create({
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
});