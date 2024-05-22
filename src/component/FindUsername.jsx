import React, { useState } from 'react';
import './FindUsername.css';
//import { useNavigate } from 'react-router-dom';

const FindUsername = () => {
    const [email, setEmail] = useState('');
  

    const handleSubmit = (event) => {
        event.preventDefault();
        // 아이디 찾기 로직 처리 (예: 서버로 요청)
        console.log('Email:', email);
    };

    return (
        <div className="find-username-container">
            <form className="find-username-form" onSubmit={handleSubmit}>
                <h2>아이디 찾기</h2>
                <p className="find-username-info">가입시 등록한 정보로 아이디를 찾을 수 있습니다.</p>
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
                <button type="submit">아이디 찾기</button>
            </form>
        </div>
    );
};

export default FindUsername;
