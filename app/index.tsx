import { View, Text, useColorScheme } from 'react-native';
import Btn from '../components/CustomButton';
import StyleDefault from '../constants/DefaultStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';

export default function GettingStartedScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const defaultStyles = StyleDefault({ colorScheme });

    return (
        <SafeAreaView style={{...defaultStyles.container, paddingHorizontal: 20,}}>
            <View style={{flex: 5, justifyContent:"center", alignItems: "center"}}>
                <Text style={{color: Colors[colorScheme ?? "light"].primaryText}}>PLACEHOLDER IMAGE</Text>
            </View>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", width: "100%"}}>
                <Btn styleBtn={{}} styleTxt={{ fontWeight: 600,}} text="Get started" onPress={() => {router.navigate('phone_number');}} />
            </View>
        </SafeAreaView>
    )
}