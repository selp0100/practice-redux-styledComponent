import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Input from './Input';
import Main from './Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/1" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
