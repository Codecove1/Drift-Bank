import { Stack } from 'expo-router';

export default function SupportLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Support' }} />
      <Stack.Screen name="faq" options={{ title: 'FAQs' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact Support' }} />
    </Stack>
  );
}