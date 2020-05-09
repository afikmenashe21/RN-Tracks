import React, { useContext, useCallback } from 'react';
import { Text } from 'react-native-elements'
import Map from '../components/Map';
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import '../_mockLocation';// just for fake location
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {

    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording])
    const [permissionStatus] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
            {permissionStatus === "denied" ? (
                <Text>Please enable location services</Text>
            ) : null}
            <TrackForm />
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title: 'Add track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}

export default withNavigationFocus(TrackCreateScreen);