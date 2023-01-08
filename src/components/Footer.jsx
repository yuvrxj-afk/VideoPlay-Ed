import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} p={'16'} color={'white'} minH={'40'}>
      <Stack direction={['coloumn', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe Our News Letter
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here !"
              border={'none'}
              borderRadius={'20'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            Domain.HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack>
        <VStack w={'full'}></VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
