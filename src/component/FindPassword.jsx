import React, { useState } from 'react';
import './FindPassword.css';

const FindPassword = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // 비밀번호 재설정 로직 처리 (예: 서버로 요청)
        console.log('Username:', username);
        console.log('Email:', email);
    };

    return (
        <div className="find-password-container">
            <form className="find-password-form" onSubmit={handleSubmit}>
                <h2>비밀번호 찾기</h2>
                <p>가입시 등록한 정보로 비밀번호를 찾을 수 있습니다.</p>
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
                    <label htmlFor="email">이메일</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="이메일을 입력하세요"
                        required 
                    />
                </div>
                <button type="submit">비밀번호 찾기</button>
            </form>
        </div>
    );
};

export default FindPassword;

