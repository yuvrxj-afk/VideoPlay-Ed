import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SIgnup = () => {
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
          <Heading alignSelf={'center'}>Domain.HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'75'} />
          <Input
            placeholder="Name"
            required
            focusBorderColor={'purple.500'}
            type={'text'}
          />
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
          <Button type="submit" colorScheme={'purple'}>
            Sign Up/In
          </Button>
          <Text textAlign={'right'}>
            Existing User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}> Log In </Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SIgnup;
