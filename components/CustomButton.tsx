import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle} from 'react-native';

interface BtnProps {
    onPress?: () => void;
    text: string;
    styleBtn?: ViewStyle;
    styleTxt?: TextStyle;
}

export default function Btn({onPress, text, styleBtn, styleTxt}: BtnProps) {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={{
                backgroundColor: "red",
                padding: 15,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
                ...styleBtn
            }}
        >
            <Text style ={{
                color: "black",
                fontSize: 16,
                ...styleTxt
            }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}