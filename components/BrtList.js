/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, ColorPropType} from 'react-native';
import {ListItem, List, colors} from 'react-native-elements';
import Icon from 'react-native-elements';

const BrtList = props => {
  console.log('PROPS');
  console.log(props.data);
  // props.data._data.totalPer = props.data._data.perIn - props.data._data.perOut;

  if (props.data.totalPer >= props.buss.capacidad) {
    // asiento no disponible
    // color rojo
    return (
      <View>
        <ListItem
          containerStyle={styles.header}
          topDivider
          title={<Text style={styles.text}>{props.title}</Text>}
          bottomDivider
          leftIcon={props.leftIcon}
          subtitle="Asientos no disponibles"
          subtitleStyle={{color: 'red'}}
        />
      </View>
    );
  } else if (
    props.data.totalPer < props.buss.capacidad &&
    props.data.totalPer > 40
  ) {
    // asiento disponible y cantidad de asientos
    // color amarillo
    let asiento = props.buss.capacidad - props.data.totalPer;
    let info = 'Asientos disponibles: ' + asiento;

    return (
      <View>
        <ListItem
          containerStyle={styles.header}
          topDivider
          title={<Text style={styles.text}>{props.title}</Text>}
          bottomDivider
          leftIcon={props.leftIcon}
          subtitle={info}
          subtitleStyle={{color: 'yellow'}}
        />
      </View>
    );
  } else {
    // asiento disponible y cantidad de asientos
    // color verde
    let asiento = props.buss.capacidad - props.data.totalPer;
    let info = 'Asientos disponibles: ' + asiento;
    return (
      <View>
        <ListItem
          containerStyle={styles.header}
          topDivider
          title={<Text style={styles.text}>{props.title}</Text>}
          bottomDivider
          leftIcon={props.leftIcon}
          subtitle={info}
          subtitleStyle={{color: 'green'}}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'grey',
  },
  text: {
    color: 'white',
    fontSize: 17,
  },
});

export default BrtList;
