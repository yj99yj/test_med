import React, { useState } from 'react';
import './Login.css'; // 외부 스타일시트를 import

function Login() {
  // 상태 변수 정의
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // 입력값 변경 처리 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 유효성 검사 함수
  const validateForm = () => {
    const newErrors = {};

    // 이메일 유효성 검사
    if (!formData.email) {
      newErrors.email = '이메일을 입력하세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '유효한 이메일 주소를 입력하세요.';
    }

    // 비밀번호 유효성 검사
    if (!formData.password) {
      newErrors.password = '비밀번호를 입력하세요.';
    }

    setErrors(newErrors);

    // 오류가 없다면 true 반환
    return Object.keys(newErrors).length === 0;
  };

  // 폼 제출 처리 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // 유효성 검사 통과 시 로그인 처리 (여기서는 콘솔 로그로 대체)
      console.log('로그인 정보:', formData);
    }
  };

  return (
    <div className="container">
      <div className="login-grid">
        <div className="login-text">
          <h2>로그인</h2>
        </div>
        <div className="login-text">
          새로운 회원이신가요? <span><a href="../Sign_Up/Sign_Up.html" style={{ color: '#2190FF' }}>여기에서 가입하세요</a></span>
        </div>
        <br />
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            {/* 이메일 입력 폼 */}
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="이메일을 입력하세요"
                value={formData.email}
                onChange={handleChange}
                aria-describedby="helpId"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            {/* 비밀번호 입력 폼 */}
            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="비밀번호를 입력하세요"
                value={formData.password}
                onChange={handleChange}
                aria-describedby="helpId"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            {/* 로그인 및 초기화 버튼 */}
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                로그인
              </button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">
                초기화
              </button>
            </div>
            <br />
            {/* 비밀번호를 잊으셨나요? */}
            <div className="login-text">
              비밀번호를 잊으셨나요?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
