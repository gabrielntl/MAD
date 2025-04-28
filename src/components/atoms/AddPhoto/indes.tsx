import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AddPhoto = () => {
  return (
    <TouchableOpacity style={styles.outerCircle}>
      <View style={styles.innerCircle}>
        <Text style={styles.text}>Add{'\n'}Photo</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#A0A0A0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 120,
    height: 120,
    borderRadius: 70,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default AddPhoto;
