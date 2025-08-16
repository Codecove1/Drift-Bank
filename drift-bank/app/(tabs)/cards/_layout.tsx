import { Stack } from 'expo-router';

export default function CardsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Cards' }} />
      <Stack.Screen name="details" options={{ title: 'Card Details' }} />
      <Stack.Screen name="controls" options={{ title: 'Card Controls' }} />
    </Stack>
  );
}