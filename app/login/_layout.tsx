import { Stack } from 'expo-router';

export default function LoginStackLayout() {
  return (
    <Stack screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name="password" />
    </Stack>
  );
}