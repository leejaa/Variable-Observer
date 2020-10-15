/* eslint-disable react/require-default-props */
import * as React from 'react';
import { BsPerson } from 'react-icons/bs';
import {
  Container, SCREEN_WIDTH, AIRBNB_DARKGRAY, InputContainer, AIRBNB_GREEN,
} from '../utils/styles';

type Props = {
  placeholder?: string,
  onChange?: any,
  value?: string | number,
}

const Input = ({
  placeholder = '이메일 주소',
  onChange = () => console.log('onChange'),
  value = '',
}: Props) => (
  <Container
    w="100%"
    h="100%"
    dp="flex"
    fd="row"
    position="relative"
  >
    <Container w="100%" h="100%">
      <InputContainer
        w="100%"
        h="100%"
        bw={1}
        boc={AIRBNB_DARKGRAY}
        oc={AIRBNB_GREEN}
        fs={SCREEN_WIDTH / 100}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
    <Container w="8%" h="100%" dp="flex" jc="center" ai="center" position="absolute" z={100} right="0px">
      <BsPerson style={{ fontSize: SCREEN_WIDTH / 60, color: 'black' }} />
    </Container>
  </Container>
);

export default Input;
