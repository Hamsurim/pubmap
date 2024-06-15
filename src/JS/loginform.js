import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import '../CSS/loginform.css';

function LoginPage() {
  const [showSignIn, setShowSignIn] = useState(true);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
  };

  const handleCloseClick = () => {
    navigate('/'); // 홈 페이지로 이동
  };

  return (
    <div className="login-page">
      <div className="login-switcher">
        <div className="login-switcher-signin">
        <button className="close-button" onClick={handleCloseClick}>X</button>
          <button onClick={handleSignInClick}>로그인</button>
        </div>
        <div className="login-switcher-signup">
          <button onClick={handleSignUpClick}>회원가입</button>
        </div>
      </div>
      <div className={`login-content login-content-signin ${showSignIn ? '' : 'ng-hide'}`}>
        <h2>로그인</h2>
        <form className="wrapper-box">
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <div className='login-okay'>
          <button type="submit">확인</button>
          </div>
        </form>
      </div>
      <div className={`login-content login-content-signup ${showSignIn ? 'ng-hide' : ''}`}>
        <h2>회원가입</h2>
        <form className="wrapper-box">
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className='login-okay'>
          <button type="submit">확인</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
