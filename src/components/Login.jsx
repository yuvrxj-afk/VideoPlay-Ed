import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} p={'16'} h={'100vh'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back ! Log In</Heading>
          <Input
            placeholder="Email here"
            required
            focusBorderColor={'purple.500'}
            type={'email'}
          />
          <Input
            placeholder="password "
            required
            focusBorderColor={'purple.500'}
            type={'password'}
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}> Forgot Password? </Link>
          </Button>
          <Button type="submit" colorScheme={'purple'}>
            Log In
          </Button>
          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}> Sign Up </Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
