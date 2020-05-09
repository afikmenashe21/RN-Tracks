import React, { useContext } from 'react';
import { Text, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Account Screen</Text>
            <Spacer>
                <Button
                    onPress={signout}
                    title="Logout"
                />
            </Spacer>
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    tabBarIcon: <FontAwesome name="gear" size={20} />
}

export default AccountScreen;