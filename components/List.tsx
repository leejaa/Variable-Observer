/* eslint-disable react/require-default-props */
import * as React from 'react';
import _ from 'lodash';
import { RiCloseLine } from 'react-icons/ri';
import {
  Container, SpanContainer, SCREEN_WIDTH, AIRBNB_DARKGRAY, AIRBNB_DARKGRAY2,
} from '../utils/styles';

type Props = {
  data?: Array<string>,
  fnDelete?: any,
}

const List = ({
  data = ['테스트1', '테스트2', '테스트3'],
  fnDelete = () => console.log('fnDelete'),
}: Props) => (
  <Container w="100%" h="100%">
    {
      _.map(data, (item, index) => (
        <>
          <Container key={index} w="100%" h={`${100 / _.size(data)}%`} dp="flex" fd="row" ai="center" jc="space-between">
            <SpanContainer fs={SCREEN_WIDTH / 100} fc={AIRBNB_DARKGRAY2}>{item}</SpanContainer>
            <RiCloseLine style={{ fontSize: SCREEN_WIDTH / 70, color: AIRBNB_DARKGRAY, cursor: 'pointer' }} onClick={() => fnDelete(item)} />
          </Container>
        </>
      ))
    }
  </Container>
);

export default List;
