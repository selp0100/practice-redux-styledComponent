import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const getNum = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <MainPage>
      <Title>HELLO</Title>
      <Title>redux {getNum}</Title>
      <BtnBox>
        <Button
          onClick={() => {
            dispatch({ type: 'add' });
          }}
        >
          증가
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: 'minus' });
          }}
        >
          감소
        </Button>
      </BtnBox>
      {NUMBER_DATA.map(number => (
        <Content number={number} key={number.id} Button={Button} />
      ))}
    </MainPage>
  );
};

const MainPage = styled.div`
  ${props => props.theme.variables.absoluteCenter}
  width:100vw;
  padding: 3rem;
`;

const BtnBox = styled.div`
  ${props => props.theme.variables.flex('center', 'center', 'center')}
`;

const Button = styled.button`
  width: 3rem;
  height: 2rem;
  margin: 0 3rem;
  text-align: center;
  color: white;
  background-color: ${p => p.theme.style.deepGrey};
  &:hover {
    background-color: ${p => p.theme.style.middleGrey};
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem gray;
  }
  &:active {
    color: white;
    background-color: ${p => p.theme.style.black};
    box-shadow: none;
  }
`;

const Title = styled.main`
  font-size: 2rem;
  color: black;
  text-align: center;
  margin: 5rem 0;
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
