import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import LoginForm from './component/LoginForm';
import FindPassword from './component/FindPassword';
import SignUpForm from './component/SignUpForm';
import { BrowserRouter } from 'react-router-dom';


/**
 * 
 * Co-Author : 소프트웨어학부 20191672 조현민
 * 리엑트 문법 1도 모르지만 5분만에 이민우군의 이상한 고민 해결
 */


function App() {
    return (
        <BrowserRouter>
        <Routes>
      <Route path='/' element={<LoginForm />} >
      </Route>
      <Route path='/find-password' element={<FindPassword />} >
      </Route>
      <Route path='/sign-up-form' element={<SignUpForm />} >
      </Route>
    </Routes>
        
    </BrowserRouter>
        
        
    );
}

export default App;


