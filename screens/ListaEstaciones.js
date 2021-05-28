import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Header from '../components/Header';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

const ListaEstaciones = () => {
  const estaciones = [
    {
      name: 'E1',
      latitud: '-17.778555588289784',
      longitud: '-63.188462831262775',
    },
    {
      name: 'E2',
      latitud: '-17.79039395255991',
      longitud: '-63.18738441812015',
    },
    {
      name: 'E3',
      latitud: '-17.79219615453541',
      longitud: '-63.17990718328248',
    },
    {
      name: 'E4',
      latitud: '-17.784424515916935',
      longitud: '-63.17203494834411',
    },
    {
      name: 'E5',
      latitud: '-17.774708366295876',
      longitud: '-63.17739118590785',
    },
  ];
  return (
    <View>
      <Header title="Estaciones" />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -17.783722,
          longitude: -63.181204,
          latitudeDelta: 0.025,
          longitudeDelta: 0.0221,
        }}>
        {estaciones.map(item => (
          <Marker
            coordinate={{
              latitude: item.latitud,
              longitude: item.longitud,
            }}
            title={item.name}>
            <Icon1 name="bus-stop" color="darkblue" size={25} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default ListaEstaciones;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#14213d',
    height: 50,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#14213d',
  },
  map: {
    height: '100%',
  },
  text: {
    paddingTop: 10,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
