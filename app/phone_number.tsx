import { View, Text, useColorScheme } from 'react-native';
import Btn from '../components/CustomButton';
import StyleDefault from '../constants/DefaultStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function PhoneNumberScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const defaultStyles = StyleDefault({ colorScheme });

    return (
        <SafeAreaView style={{...defaultStyles.container, paddingHorizontal: 20,}}>
            <View style={{flex: 10, justifyContent:"center", alignItems: "center"}}>
                <Text>Phone Number</Text>
            </View>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", width: "100%"}}>
                <Btn styleBtn={{width: "100%"}} styleTxt={{fontSize: 14, color: "white"}} text="Enter" onPress={() => {router.navigate("/login/password");}} />
            </View>
        </SafeAreaView>
    )
}