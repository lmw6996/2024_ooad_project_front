import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import './App.css';
import Home from './component/Home';
import LoginForm from './component/LoginForm';
import FindPassword from './component/FindPassword';
import SignUpForm from './component/SignUpForm'
import FindUsername from './component/FindUsername';
import SignUpComplete from './component/SignUpComplete';


function App() {
    return (
        <div className="App">
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path="/find-password" element={<FindPassword />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path='/find-username' element={<FindUsername />} />
                <Route path='/signup-complete' element={<SignUpComplete />} />
            </Routes>
        </AuthProvider>
        </div>
    );
}

export default App;




