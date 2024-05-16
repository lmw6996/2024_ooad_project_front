import React, { useState } from 'react';
import './LoginForm.css';
import FindPassword from './FindPassword';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showFindPassword, setShowFindPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };
    

    return (
        <div className="login-container">
            {showFindPassword ? (
                <FindPassword onGoBack={handleGoBack} />
            ) : (
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>로그인</h2>
                    <div className="form-group">
                        <label htmlFor="username">아이디</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder="아이디를 입력하세요"
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="비밀번호를 입력하세요"
                            required 
                        />
                    </div>
                    <button type="submit">로그인</button>
                    <div className="forgot-links">
                        <a href='/find-password'>비밀번호 찾기</a>
                    </div>
                    <div className="signup-info">
                        <p>Q&A Place가 처음이신가요? <a href="/signup">회원가입</a></p>
                    </div>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
