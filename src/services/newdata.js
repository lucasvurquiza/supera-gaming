import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import Card from '../components/Card';
import products from '../json/products.json';
import ex from './index'

export const newdata = products.map((product , index) => {
  
  return (
    <Card titulo={product.name}>
      <Text>{product.price}</Text>
      <Image
      source={ex[index].src}
    />
    </Card>
  );
});
const styles = StyleSheet.create({
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
});