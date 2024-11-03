import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 앱에 HTML5 history API를 사용하여 페이지를 새로 고치지 않고도 주소를 변경할 수 있게 해주는 라우터 컴포넌트입니다
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
