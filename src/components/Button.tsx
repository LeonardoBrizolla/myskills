import React from 'react';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string,
};

export function Button({ title,...rest }: ButtonProps){
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={.8}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {title}
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