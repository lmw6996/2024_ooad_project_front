import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpComplete.css';

const SignUpComplete = () => {
    const navigate = useNavigate();

    const handleGoToMain = () => {
        navigate('/');
    };

    return (
        <div className="signup-complete-container">
            <div className="signup-complete-box">
                <h2>회원가입 완료</h2>
                <p>회원가입이 완료되었습니다.</p>
                <p>Q&A Place에서 멋진 활약 부탁드립니다 :)</p>
                <button onClick={handleGoToMain} className="main-button">메인으로 이동</button>
            </div>
        </div>
    );
};

export default SignUpComplete;


