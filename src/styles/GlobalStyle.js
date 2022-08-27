import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  .Button {
  width: 3rem;
  height: 2rem;
  margin: 0 3rem;
  color: white;
  background-color: ${p => p.theme.style.deepGrey};
  align-items: center;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: ${p => p.theme.style.middleGrey};
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem gray;
  }
  &:active {
    color: white;
    background-color: ${p => p.theme.style.black};
    box-shadow: none;
  }
}
`;

export default GlobalStyle;
