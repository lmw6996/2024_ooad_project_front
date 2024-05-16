import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNicknameChange = (event) => {
        setNickname(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleDuplicateCheck = (fieldName) => {
        // 중복 확인 로직을 구현하세요
        console.log(`Checking duplicate for ${fieldName}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 회원가입 로직 처리 (예: 서버로 요청)
        console.log('User ID:', userId);
        console.log('Email:', email);
        console.log('Nickname:', nickname);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>회원가입</h2>
                <p>Q&A Place에 오신것을 환영합니다.</p>
                <hr/>
                <div className="form-group">
                    <label htmlFor="userId">*아이디</label>
                    <input 
                        type="text" 
                        id="userId" 
                        value={userId} 
                        onChange={handleUserIdChange} 
                        placeholder="아이디를 입력하세요"
                        required 
                    />
                    <button type="button" onClick={() => handleDuplicateCheck('userId')}>중복 확인</button>
                </div>
                <div className="form-group">
                    <label htmlFor="email">*이메일</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        placeholder="이메일을 입력하세요"
                        required 
                    />
                    <button type="button" onClick={() => handleDuplicateCheck('email')}>중복 확인</button>
                </div>
                <div className="form-group">
                    <label htmlFor="nickname">*닉네임</label>
                    <input 
                        type="text" 
                        id="nickname" 
                        value={nickname} 
                        onChange={handleNicknameChange} 
                        placeholder="닉네임을 입력하세요"
                        required 
                    />
                    <button type="button" onClick={() => handleDuplicateCheck('nickname')}>중복 확인</button>
                </div>
                <hr/>
                <div className="form-group">
                    <label htmlFor="password">*비밀번호</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        placeholder="비밀번호를 입력하세요"
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">*비밀번호 확인</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        value={confirmPassword} 
                        onChange={handleConfirmPasswordChange} 
                        placeholder="비밀번호를 다시 입력하세요"
                        required 
                    />
                </div>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default SignUpForm;
