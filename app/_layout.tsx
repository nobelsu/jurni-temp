import { Stack } from 'expo-router';

export default function RootStackLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="phone_number" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="home" />
    </Stack>
  );
}