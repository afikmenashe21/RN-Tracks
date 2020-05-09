import { Accuracy, watchPositionAsync } from 'expo-location'
import * as Permissions from "expo-permissions";
import { useEffect, useState } from 'react';

//when we want to get permisson from the user and keep track him we just have to call 'useLocation'
//and provide an callback function which will handle the updated location
export default useLocation = (shouldTrack, callBack) => {

    const [permissionStatus, setPermissionStatus] = useState(null);

    useEffect(() => {
        let subscriber;

        const startWatching = async () => {
            try {
                const response = await Permissions.askAsync(Permissions.LOCATION);
                setPermissionStatus(response.status); // equals to 'granted' 
                subscriber = await watchPositionAsync({ // listen to the location when the app is run
                    accuracy: Accuracy.BestForNavigation,// and when it has been updated the callback func will invoke
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                    callBack
                );

            } catch (e) { // e equals to denied
                setPermissionStatus(e);
            }
        };

        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {

            if (subscriber) {
                subscriber.remove();
            }
        }

    }, [shouldTrack, callBack])



    return [permissionStatus]
}