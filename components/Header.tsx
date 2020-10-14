/* eslint-disable react/require-default-props */
import * as React from 'react';
import {
  Container, SpanContainer, SCREEN_WIDTH, AIRBNB_PINK,
} from '../utils/styles';

type Props = {
  title?: string,
}

const Header = ({
  title = 'Variable Observer demo page',
}: Props) => (
  <Container
    w="100%"
    h="10%"
    position="absolute"
    top={0}
    z={100}
    dp="flex"
    fd="row"
    ai="center"
    jc="space-between"
    bc="white"
  >
    <Container
      w="25%"
      h="80%"
      dp="flex"
      ai="center"
      jc="center"
    >
      <SpanContainer
        fs={SCREEN_WIDTH / 60}
        color={AIRBNB_PINK}
        fw="bold"
      >
        {title}
      </SpanContainer>
    </Container>
    <Container w="20%" h="80%" dp="flex" fd="row" ai="center" jc="space-around">
      <SpanContainer
        fs={SCREEN_WIDTH / 100}
        fw="bold"
      >
        GITHUB_URL
      </SpanContainer>
      <SpanContainer
        fs={SCREEN_WIDTH / 100}
        fw="bold"
      >
        과제 설명글
      </SpanContainer>
    </Container>
  </Container>
);

export default Header;
