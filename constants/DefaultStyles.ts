import { ColorSchemeName, StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { useFonts } from 'expo-font';

interface StyleDefaultProps {
    colorScheme : ColorSchemeName    
}

export default function StyleDefault({ colorScheme } : StyleDefaultProps) {
  const DefaultStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[colorScheme ?? "light"].primaryBackground,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: 20,
      paddingTop: 10,
    },
    title: {
      fontSize: 22,
      fontFamily: 'Outfit_600SemiBold',
      color: Colors[colorScheme ?? "light"].primaryText,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 14,
      fontFamily: 'Outfit_400Regular',
      color: Colors[colorScheme ?? "light"].secondary,
    },
    smallCard: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: Colors[colorScheme ?? "light"].borderColor,
      backgroundColor: Colors[colorScheme ?? "light"].primaryBackground,
    },
    mediumCard: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: Colors[colorScheme ?? "light"].borderColor,
      backgroundColor: Colors[colorScheme ?? "light"].primaryBackground,
    },
    largeCard: {
      borderRadius: 16,
      borderWidth: 4,
      borderColor: Colors[colorScheme ?? "light"].borderColor,
      backgroundColor: Colors[colorScheme ?? "light"].primaryBackground,
    },
  });
  return DefaultStyles;
}