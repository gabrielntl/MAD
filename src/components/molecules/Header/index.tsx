import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ title, onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Icon name="chevron-back" size={30} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 38,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    paddingRight: 12,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#000',
    paddingLeft: 15,
  },
});

export default Header;
