import React, {Component} from 'react';
import {View, SafeAreaView, Text, Button, StyleSheet} from 'react-native';
import Header from '../components/Header';
import BrtList from '../components/BrtList';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {ListItem, List, Badge} from 'react-native-elements';

export default class HomeScreen extends Component {
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
    console.log('state');
    console.log(this.state.datos);
    console.log(this.state.datos);
    return (
      <View>
        <Header />
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -17.783722,
            longitude: -63.181204,
            latitudeDelta: 0.025,
            longitudeDelta: 0.0221,
          }}>
          {this.state.datos.map(item => (
            <Marker
              coordinate={{
                latitude: item.GPS.Latitud,
                longitude: item.GPS.Longitud,
              }}
              title={item.BUS.nomBus}>
              <Icon name="bus" color={item.BUS.iconColor} size={22} />
            </Marker>
          ))}
        </MapView>
        <View style={styles.header}>
          <Text style={styles.text}>BRT Buses</Text>
        </View>
        <View>
          {this.state.datos.map((item, i) => (
            <BrtList
              data={item.PASAJEROS}
              buss={item.BUS}
              title={item.BUS.nomBus}
              leftIcon={{name: 'direction-bus', color: item.BUS.iconColor}}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'grey',
    height: 50,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#14213d',
  },
  map: {
    height: '70%',
  },
  text: {
    paddingTop: 10,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
