import { View, Text, useColorScheme, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Btn from '../components/CustomButton';
import StyleDefault from '../constants/DefaultStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';

export default function PhoneNumberScreen() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const defaultStyles = StyleDefault({ colorScheme });

    return (
        <SafeAreaView style={{...defaultStyles.container, paddingHorizontal: 20,}}>
            <KeyboardAvoidingView style={{flex: 1,}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={{flex: 5, paddingTop: 30,}}>
                    <Text style={defaultStyles.title}>Enter your mobile number</Text>
                    <Text style={{...defaultStyles.subtitle, marginTop: 10,}}>We'll check if you have an account or help you create one</Text>
                    <View style={{flexDirection: "row", marginTop: 20, gap: 5, height: 50,}}>
                        <View style={{flex: 1, alignItems: "center", borderTopLeftRadius: 15, borderBottomLeftRadius: 15, backgroundColor: Colors[colorScheme ?? "light"].secondaryBackground}}>
                            <View style={{width: "80%", height: "100%", alignItems: "center", flexDirection: "row", }}>
                                <View style={{ height: "80%", justifyContent: "center", alignItems: "center", marginHorizontal: 5,}}>
                                    <Text style={{ fontSize: 14}}>
                                        +
                                    </Text>
                                </View>
                                <TextInput style={{textAlign: "center", fontSize: 14, height: "80%", }} defaultValue="44" placeholder="44"/>
                            </View>
                        </View>
                        <View style={{flex: 4, alignItems: "center", justifyContent: "center", borderTopRightRadius: 15, borderBottomRightRadius: 15, backgroundColor: Colors[colorScheme ?? "light"].secondaryBackground}}>
                            <TextInput style={{width: "90%", height: "80%", fontSize: 14, }} placeholder='Phone Number'/>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: "flex-end", width: "100%"}}>
                    <Btn styleBtn={{width: "40%", borderRadius: 100,}} styleTxt={{ fontWeight: 600,}} text="Next" onPress={() => {router.navigate('login/password');}} />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}