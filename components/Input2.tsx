/* eslint-disable react/require-default-props */
import * as React from 'react';
import { BsPerson } from 'react-icons/bs';
import {
  Container, SCREEN_WIDTH, AIRBNB_DARKGRAY, InputContainer, AIRBNB_GREEN, SpanContainer,
} from '../utils/styles';

type Props = {
  placeholder?: string,
  onChange?: any,
  fnAdd?: any,
  value?: string | number,
}

const Input2 = ({
  placeholder = '추가할 언어 입력',
  onChange = () => console.log('onChange'),
  fnAdd = () => console.log('fnAdd'),
  value = '',
}: Props) => (
  <Container
    w="100%"
    h="100%"
    dp="flex"
    fd="row"
    position="relative"
  >
    <Container w="80%" h="100%" border={1} boc={AIRBNB_DARKGRAY}>
      <InputContainer
        w="99.5%"
        h="100%"
        oc={AIRBNB_GREEN}
        fs={SCREEN_WIDTH / 100}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
    <Container w="20%" h="100%" dp="flex" jc="center" ai="center" cursor="pointer" border={1} boc={AIRBNB_DARKGRAY} onClick={fnAdd}>
      <SpanContainer fs={SCREEN_WIDTH / 70} fw="bold">추가</SpanContainer>
    </Container>
  </Container>
);

export default Input2;
