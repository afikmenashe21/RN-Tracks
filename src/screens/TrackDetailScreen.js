import React, { useContext } from 'react';
import { Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const id = navigation.getParam('id');
    const track = state.find(t => id === t._id);
    const initialCoords = track.locations[0].coords;

    return <>
        <Text style={{ fontSize: 48 }}>{track.name}</Text>
        <MapView
            style={{ height: 250 }}
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initialCoords
            }}
        >
            <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
    </>
}

export default TrackDetailScreen;