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
          <Text>All Rights Reserved.</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'none'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href="https://www.youtube.com/">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href="https://www.linkedin.com/">
              LinkedIn
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'blank'} href="https://www.instagram.com/">
              Instagram
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
