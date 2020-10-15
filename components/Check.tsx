/* eslint-disable react/require-default-props */
import * as React from 'react';
import { IoIosCloseCircleOutline, IoIosCloseCircle } from 'react-icons/io';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import {
  Container, SpanContainer, SCREEN_WIDTH, AIRBNB_DARKGRAY2,
} from '../utils/styles';

type Props = {
  title?: string,
  isChecked?: boolean,
  onClick?: any,
}

const Check = ({
  title = 'javascript',
  isChecked = true,
  onClick = () => console.log('onClick'),
}: Props) => (
  <Container
    w="100%"
    h="100%"
    dp="flex"
    fd="row"
    ai="center"
    jc="space-between"
  >
    <SpanContainer fs={SCREEN_WIDTH / 70} color={AIRBNB_DARKGRAY2}>{title}</SpanContainer>
    <Container w="18%" h="100%" dp="flex" fd="row" ai="center" jc="space-around">
      {
        isChecked ? (
          <>
            <IoIosCloseCircleOutline
              style={{ fontSize: SCREEN_WIDTH / 50, color: AIRBNB_DARKGRAY2 }}
              onClick={() => onClick({ key: title, isChecked: false })}
            />
            <AiFillCheckCircle
              style={{ fontSize: SCREEN_WIDTH / 50, color: 'black' }}
              onClick={() => onClick({ key: title, isChecked: true })}
            />
          </>
        ) : (
          <>
            <IoIosCloseCircle
              style={{ fontSize: SCREEN_WIDTH / 50, color: 'black' }}
              onClick={() => onClick({ key: title, isChecked: false })}
            />
            <AiOutlineCheckCircle
              style={{ fontSize: SCREEN_WIDTH / 50, color: 'black' }}
              onClick={() => onClick({ key: title, isChecked: true })}
            />
          </>
        )
      }
    </Container>
  </Container>
);

export default Check;
