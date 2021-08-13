import React from 'react';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export function Button({ onPress }){
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={.8}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        Add
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: 'bold',
  },
})