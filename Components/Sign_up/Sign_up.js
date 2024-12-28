import React, { useState } from 'react';
import './Sign_Up.css'; // 외부 스타일시트를 import

function SignUp() {
  // 상태 변수 설정
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
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

    // 이름 유효성 검사
    if (!formData.name) {
      newErrors.name = '이름을 입력하세요.';
    }

    // 전화번호 유효성 검사
    if (!formData.phone) {
      newErrors.phone = '전화번호를 입력하세요.';
    } else if (!/^\d{3}-\d{3,4}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = '유효한 전화번호를 입력하세요 (예: 010-1234-5678).';
    }

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
      // 유효성 검사 통과 시 회원가입 처리 (여기서는 콘솔 로그로 대체)
      console.log('회원가입 정보:', formData);
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>회원가입</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          이미 회원이신가요? <span><a href="../Login/Login.html" style={{ color: '#2190FF' }}>로그인</a></span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            {/* 이름 입력 */}
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="이름을 입력하세요"
                value={formData.name}
                onChange={handleChange}
                aria-describedby="helpId"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            {/* 전화번호 입력 */}
            <div className="form-group">
              <label htmlFor="phone">전화번호</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="전화번호를 입력하세요"
                value={formData.phone}
                onChange={handleChange}
                aria-describedby="helpId"
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            {/* 이메일 입력 */}
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="이메일을 입력하세요"
                value={formData.email}
                onChange={handleChange}
                aria-describedby="helpId"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            {/* 비밀번호 입력 */}
            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="비밀번호를 입력하세요"
                value={formData.password}
                onChange={handleChange}
                aria-describedby="helpId"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            {/* 제출 및 초기화 버튼 */}
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                제출
              </button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">
                초기화
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
