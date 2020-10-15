import * as React from 'react';
import { useState, useCallback } from 'react';
import _ from 'lodash';
import {
  Container, SCREEN_WIDTH, SCREEN_HEIGHT, AIRBNB_GRAY, SpanContainer,
} from '../utils/styles';
import Header from '../components/Header';
import Input from '../components/Input';
import Check from '../components/Check';
import { DUMMY_DATA } from '../utils/dummy-data';
import List from '../components/List';
import Input2 from '../components/Input2';

const IndexPage = () => {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [enableLanguage, setEnableLanguage] = useState(DUMMY_DATA);
  const [additionalLanguage, setAdditionalLanguage] = useState('');
  const [additionalLanguages, setAdditionalLanguages] = useState([]);
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const onChangeAge = useCallback((e) => {
    setAge(e.target.value);
  }, []);
  const onClickEnableLanguage = useCallback(({ key, isChecked }) => {
    const newEnableLanguage = _.set(_.clone(enableLanguage), key, isChecked);
    setEnableLanguage(newEnableLanguage);
  }, [enableLanguage]);
  const onChangeAdditionalLanguage = useCallback((e) => {
    setAdditionalLanguage(e.target.value);
  }, []);
  const onClickAdditionalLanguages = useCallback(() => {
    const newAdditionalLanguages = _.clone(additionalLanguages);
    newAdditionalLanguages.push(additionalLanguage);
    setAdditionalLanguage('');
    setAdditionalLanguages(newAdditionalLanguages);
  }, [additionalLanguage, additionalLanguages]);
  const onClickDeleteAdditionalLanguages = useCallback((value) => {
    const newAdditionalLanguages = _.pull(additionalLanguages, value);
    setAdditionalLanguages(newAdditionalLanguages);
  }, [additionalLanguages]);
  return (
    <Container
      w={`${SCREEN_WIDTH}px`}
      h={`${SCREEN_HEIGHT}px`}
    >
      <Header />
      <Container
        w="100%"
        h="90%"
        dp="flex"
        fd="row"
      >
        <Container w="50%" h="100%" dp="flex" ai="center" jc="center">
          <Container w="80%" h="90%" mt="10%" border={1} boc={AIRBNB_GRAY}>
            <Container w="100%" h="10%" boc={AIRBNB_GRAY} border={1} dp="flex" jc="center" ai="center">
              <SpanContainer fs={SCREEN_WIDTH / 80} fw="bold">회원 가입</SpanContainer>
            </Container>
            <Container w="100%" h="90%" pd="5%">
              <Container w="90%" h="10%" mb="5%">
                <Input placeholder="이메일 주소" value={email} onChange={onChangeEmail} />
              </Container>
              <Container w="90%" h="10%" mb="5%">
                <Input placeholder="나이" value={age} onChange={onChangeAge} />
              </Container>
              <SpanContainer fs={SCREEN_WIDTH / 90} fw="bold" mb="3%">사용언어</SpanContainer>
              {
                _.map(Object.keys(enableLanguage), (key, index) => (
                  <Container key={index} w="90%" h="10%">
                    <Check
                      title={key}
                      isChecked={enableLanguage[key]}
                      onClick={onClickEnableLanguage}
                    />
                  </Container>
                ))
              }
              <SpanContainer fs={SCREEN_WIDTH / 90} fw="bold" mt="5%">언어추가</SpanContainer>
              {
                !_.isEqual(_.size(additionalLanguages), 0) && (
                  <Container w="90%" h="20%">
                    <List data={additionalLanguages} fnDelete={onClickDeleteAdditionalLanguages} />
                  </Container>
                )
              }
              {
                _.lte(_.size(additionalLanguages), 3) && (
                  <Container w="90%" h="10%" mt="3%">
                    <Input2
                      value={additionalLanguage}
                      onChange={onChangeAdditionalLanguage}
                      fnAdd={onClickAdditionalLanguages}
                    />
                  </Container>
                )
              }
            </Container>
          </Container>
        </Container>
        <Container w="50%" h="100%" />
      </Container>
    </Container>
  );
};

export default IndexPage;
