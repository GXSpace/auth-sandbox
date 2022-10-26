import type { NextPage } from "next";
import { Box, Button, Center, Code, Text, VStack } from "@chakra-ui/react";
import Router from "next/router";
import Title from "../components/title";

const Home: NextPage = () => {
  return (
    <Center h="100vh">
      <VStack spacing={1} align="start">
        <Title />
        <Text fontSize="2xl">Current endpoints</Text>
        <Button
          onClick={() => {
            Router.push("/login");
          }}
        >
          <Code>/login</Code>
        </Button>
        <Button
          onClick={() => {
            Router.push("/home");
          }}
        >
          <Code>/home (PROTECTED)</Code>
        </Button>
      </VStack>
    </Center>
  );
};

export default Home;
