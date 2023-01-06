import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'left'}
          >
            <Divider />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            repellendus ea nulla tempore doloremque consectetur suscipit! Quia
            temporibus quibusdam optio sequi laborum, aspernatur repellendus
            quis ab veniam aliquam minima? Rem. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Sint cupiditate dolorem quasi veniam
            laudantium unde eos atque, soluta doloribus amet a cum molestiae
            itaque? Maxime praesentium aliquid vitae quidem consequatur! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Animi doloremque
            eligendi molestiae quibusdam non eaque quasi, odio magni, temporibus
            deleniti odit facere enim qui, cum dolorum. Ipsum aperiam sequi
            quisquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ipsam praesentium dolorem, quae dignissimos beatae id ducimus,
            eveniet nemo unde repudiandae accusantium voluptate quod porro
            reiciendis obcaecati. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum, nobis velit, veniam fugit animi corporis at
            voluptatem quisquam quas quam facere non ab assumenda reprehenderit
            nulla iure voluptas incidunt quo! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Optio, blanditiis ullam cumque porro
            debitis provident facere magnam fugiat est libero officia cum veniam
            a vel voluptatibus voluptatem delectus Explicabo laboriosam
            veritatis eligendi dicta quidem exercitationem vero necessitatibus
            eos laborum similique, soluta quisquam illo perferendis voluptatum
            dolore cupiditate ipsam commodi earum?
            <Divider />
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} alt="." />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} alt="." />
      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions}>
        Future/Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} alt="." />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Explore The Excitement
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} alt="." />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Lofi The new Key
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
