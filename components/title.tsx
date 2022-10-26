import { HStack, Text } from "@chakra-ui/react";

export default function Title() {
  return (
    <HStack spacing={4}>
      <Text fontWeight="bold" fontSize="4xl">
        NextJS + RTK
      </Text>
      <Text fontSize="4xl">JWT Auth Sandbox</Text>
    </HStack>
  );
}
