import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import BrtList from '../components/BrtList';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ListItem, List, Badge} from 'react-native-elements';

export default class ListaBuses extends Component {
  state = {
    datos: [],
    error: null,
    data: [],
    brtBus: {
      coordenadas: [],
    },
    user: {
      name: '',
    },
    icon: {
      name: 'bus',
    },
  };
  unSubscribe = null;

  constructor(props) {
    super(props);
    this.getAllBuss = this.getAllBuss.bind(this);
    this.getBusses = this.getBusses.bind(this);
  }
  getUser = async () => {
    // Get user document with a given ID
    const userDocument = firestore()
      .collection('users')
      .doc('qRTa8viYbawGtIgTlIbM')
      .get();
    console.log(userDocument);
  };

  componentDidMount() {
    database()
      .ref('Datos')
      .on('value', value => {
        this.setState({
          datos: [value.val()],
        });
      });
  }

  async getAllBuss() {
    try {
      this.unSubscribe = await firestore()
        .collection('brtBuses')
        .onSnapshot(doc => {
          this.setState({
            data: doc._docs,
          });
        });
    } catch (error) {
      // load spinner
      this.setState({
        error: error,
      });
    }
  }

  getBusses() {
    try {
      database()
        .ref('Datos')
        .on('value', val => {
          let data = val.val() ? val.val() : {};
          let items = {...data};
          this.setState({
            datos: 'asdasda',
          });
        });

      console.log('state');
      console.log(this.state);
    } catch (err) {
      console.log('error en callback');
      console.log(err);
    }
  }
  render() {
    return (
      <View>
        <Header title="Buses" />
        <View>
          {this.state.datos.map((item, i) => (
            <BrtList
              data={item.PASAJEROS}
              buss={item.BUS}
              title={item.BUS.nomBus}
              leftIcon={{name: 'ios-bus', color: item.BUS.iconColor}}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  header: {
    backgroundColor: 'grey',
  },
  text: {
    color: 'white',
    fontSize: 17,
  },
});
