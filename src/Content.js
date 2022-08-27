import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = ({ number: { content, page, id } }) => {
  const [changeColor, setChangeColor] = useState(false);

  const handleChanageColor = () => {
    setChangeColor(!changeColor);
  };

  return (
    <Container>
      <Article onClick={handleChanageColor} changeColor={changeColor}>
        {content}
      </Article>
      <NewArticle>id = {id}</NewArticle>
      <PageChange to={page}>Link!</PageChange>
    </Container>
  );
};

const Container = styled.div`
  ${props => props.theme.variables.flex('center', 'space-around', 'center')}
`;

const Article = styled.article`
  font-size: 5rem;
  color: ${props => (props.changeColor ? 'blue' : 'red')};
  cursor: pointer;
`;

const NewArticle = styled(Article)`
  font-size: 2rem;
  color: ${props => props.theme.middleGrey};
`;

const PageChange = styled(Link)`
  font-size: 2rem;
  color: green;
`;
export default Main;
