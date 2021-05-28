import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> {title} </Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'BRT Tracker',
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 15,
    backgroundColor: '#14213d',
    borderTopWidth: 0,
    borderColor: 'white',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    textShadowRadius: 7,
    textShadowColor: '#3a86ff',
  },
});

export default Header;
