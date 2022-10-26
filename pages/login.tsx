import type { NextPage } from "next";
import {
  Box,
  Button,
  Center,
  Divider,
  Input,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import PasswordInput from "../components/password";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Router from "next/router";

import { LoginRequest } from "../core/types/auth";
import { useLoginMutation } from "../core/services/auth";
import { setCredentials } from "../core/state/authSlice";
import Title from "../components/title";

function parseErrorMessage(error: any): string {
  if (error.data) {
    const message = error.data.message;
    return message instanceof Array ? message[0] : message;
  } else {
    return error.error;
  }
}

const Login: NextPage = () => {
  const [formState, setFormState] = useState<LoginRequest>({
    phone_number: "",
    password: "",
  });

  const dispatch = useDispatch();
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  return (
    <Center h="100vh">
      <VStack spacing="4">
        <VStack spacing={1} align="start">
          <Title />
          <Text color="gray.500" fontSize="2xl">
            Test login
          </Text>
        </VStack>
        <InputGroup>
          <Input
            onChange={handleChange}
            name="phone_number"
            type="text"
            placeholder="Numero de telefone"
          />
        </InputGroup>

        <InputGroup>
          <PasswordInput onChange={handleChange} name="password" />
        </InputGroup>
        <Button
          isLoading={isLoading}
          onClick={async () => {
            const result = await login(formState);
            if (result.data) {
              dispatch(setCredentials(result.data));
              Router.push("/home");
            }
          }}
          colorScheme="green"
          style={{ width: "100%" }}
        >
          Login
        </Button>
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
        {isError && (
          <Box bg="red.500" rounded="lg" p={4} color="white">
            <strong>Ocorreu um erro:</strong>
            <br />
            {parseErrorMessage(error)}
          </Box>
        )}
      </VStack>
    </Center>
  );
};

export default Login;
