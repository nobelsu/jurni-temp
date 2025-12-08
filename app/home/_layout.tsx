import { Drawer } from 'expo-router/drawer';

export default function RootStackLayout() {
  return (
    <Drawer>
        <Drawer.Screen name="map" />
    </Drawer>
  );
}