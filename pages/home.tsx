import type { NextPage } from "next";
import {
  Button,
  Center,
  Code,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { deleteCredentials, selectCurrentUser } from "../core/state/authSlice";
import Title from "../components/title";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  return (
    <Center h="100vh">
      <VStack spacing="4">
        <VStack spacing={1} align="start">
          <Title />
          <Text color="gray.500" fontSize="2xl">
            Protected Route
          </Text>
          <HStack>
            <Text fontSize="xl" fontWeight="semibold">
              Authenticated:
            </Text>
            {user ? (
              <Text fontSize="xl" fontWeight="semibold" color="green.500">
                YES
              </Text>
            ) : (
              <Text fontSize="xl" fontWeight="semibold" color="red.500">
                NO
              </Text>
            )}
          </HStack>
          {user && (
            <VStack align="start">
              <Text fontSize="xl" fontWeight="semibold">
                User data:
              </Text>
              <Code>{JSON.stringify(user)}</Code>
            </VStack>
          )}
        </VStack>
        {user && (
          <Button
            onClick={() => {
              dispatch(deleteCredentials());
            }}
            colorScheme="gray"
            style={{ width: "100%" }}
          >
            Logout
          </Button>
        )}
        <Button
          onClick={() => {
            Router.push("/");
          }}
          colorScheme="gray"
          style={{ width: "100%" }}
        >
          Back to the main page
        </Button>
        <Divider />
      </VStack>
    </Center>
  );
};

export default Home;
