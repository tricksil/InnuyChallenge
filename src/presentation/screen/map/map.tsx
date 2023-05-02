import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView, { Callout, Marker, Region } from 'react-native-maps';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

const Map: React.FC = () => {
  const route = useRoute();
  const [region, setRegion] = useState<Region>();

  const getPosition = (regionParams: any): void => {
    if (regionParams) {
      setRegion({
        latitude: regionParams.latitude,
        longitude: regionParams.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    }
  };

  useEffect(() => {
    getPosition(route?.params);
  }, [route?.params]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView
        style={styles.map}
        region={region}
        zoomEnabled={false}
        scrollEnabled={false}
      >
        <Marker
          coordinate={{
            latitude: Number(region?.latitude),
            longitude: Number(region?.longitude),
          }}
        >
          <Callout>
            <Text>User</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default Map;
