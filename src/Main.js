import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const Main = () => {
  return (
    <>
      <Title>HELLO</Title>
      {NUMBER_DATA.map(number => (
        <Content number={number} key={number.id} />
      ))}
    </>
  );
};

const Title = styled.main`
  font-size: 2rem;
  color: black;
`;

export default Main;

const NUMBER_DATA = [
  {
    id: 1,
    content: 1,
    page: './1',
  },
  {
    id: 2,
    content: 2,
    page: './2',
  },
  {
    id: 3,
    content: 3,
    page: './3',
  },
  {
    id: 4,
    content: 4,
    page: './4',
  },
];
