import * as React from 'react';
import { useState } from 'react';
import { Container, SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/styles';
import Header from '../components/Header';

const IndexPage = () => {
  const [temp] = useState();
  return (
    <Container
      w={`${SCREEN_WIDTH}px`}
      h={`${SCREEN_HEIGHT}px`}
    >
      <Header />
      <Container
        w="100%"
        h="90%"
        border={1}
        dp="flex"
        fd="row"
      >
        <Container w="50%" h="100%" dp="flex" ai="center" jc="center">
          <Container w="80%" h="80%" border={1} />
        </Container>
        <Container w="50%" h="100%" />
      </Container>
    </Container>
  );
};

export default IndexPage;
