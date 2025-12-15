import { TouchableOpacity } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"
import { useRouter } from "expo-router"
import { Colors } from "../constants/Colors"
import { useColorScheme } from "react-native"

export default function BackBtn() {
    const colorScheme = useColorScheme();
    const router = useRouter();
    return (
        <TouchableOpacity onPress={() => {router.back()}} style={{padding: 16, borderRadius: "100%", backgroundColor: Colors[colorScheme ?? "light"].primary}}>
            <FontAwesomeIcon icon={faAngleLeft} size={20} color={Colors[colorScheme ?? "light"].btnText}/>
        </TouchableOpacity>
    )
}