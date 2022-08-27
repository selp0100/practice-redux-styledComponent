import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Input = () => {
  const [text, setText] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
  });

  const getInput = e => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  return (
    <InputBox>
      <div>input 1 : {text.one}</div>
      <div>input 2 : {text.two}</div>
      <div>input 3 : {text.three}</div>
      <div>input 4 : {text.four}</div>
      <TextInput name="one" placeholder="input1" onChange={getInput} />
      <TextInput name="two" placeholder="input2" onChange={getInput} />
      <TextAreaInput
        name="three"
        rows="1"
        placeholder="input3"
        onChange={getInput}
      />
      <TextAreaInput
        name="four"
        rows="1"
        placeholder="input4"
        onChange={getInput}
      />
      <Link to="/" className="Button">
        뒤로
      </Link>
    </InputBox>
  );
};

const TextInput = styled.input`
  width: 20rem;
  margin: 2rem 0;
  border: 0.1rem solid ${p => p.theme.style.lightGrey};
  border-radius: 2rem;
  padding: 1rem 3rem;
`;

const TextAreaInput = styled.textarea`
  width: 20rem;
  height: auto;
  margin: 2rem 0;
  border: 0.1rem solid ${p => p.theme.style.lightGrey};
  border-radius: 2rem;
  padding: 1rem 3rem;
  resize: none;
  overflow: hidden;
`;

const InputBox = styled.div`
  ${p => p.theme.variables.flex('column', 'center', 'center')}
  ${p => p.theme.variables.absoluteCenter}
`;

export default Input;
