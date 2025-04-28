import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({textsignin, color = '#621B21', onPress}) => {
  return (
    <TouchableOpacity style={styles.button(color)} onPress={onPress}>
      <Text style={styles.textsignin}>{textsignin}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 25,
    width: 150,
  }),
  textsignin: {
    color: 'white',
    fontSize: 25,

  },
});