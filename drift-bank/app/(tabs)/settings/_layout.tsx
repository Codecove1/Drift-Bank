import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Settings' }} />
      <Stack.Screen name="profile" options={{ title: 'Profile' }} />
      <Stack.Screen name="security" options={{ title: 'Security' }} />
      <Stack.Screen name="notifications" options={{ title: 'Notifications' }} />
    </Stack>
  );
}