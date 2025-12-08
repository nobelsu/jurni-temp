import { Stack } from 'expo-router';

export default function RegisterStackLayout() {
  return (
    <Stack>
        <Stack.Screen name="email" />
        <Stack.Screen name="password" />
    </Stack>
  );
}