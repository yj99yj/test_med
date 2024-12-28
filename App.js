// React 라이브러리에서 필요한 모듈 가져오기
import React, { useEffect } from 'react';

// react-router-dom 라이브러리에서 라우팅을 위한 컴포넌트 가져오기
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 사용자 정의 Navbar 컴포넌트 가져오기
import Navbar from './Components/Navbar/Navbar';

// 주요 App을 위한 함수 컴포넌트
function App() {

  // 주요 App 컴포넌트 렌더링
  return (
    <div className="App">
        {/* 라우팅을 위한 BrowserRouter 설정 */}
        <BrowserRouter>
          {/* Navbar 컴포넌트 표시 */}
          <Navbar/>

          {/* 다양한 페이지를 위한 Routes 설정 */}
          <Routes>
            {<Route path="/" element={<Landing_Page/>}/>}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// App 컴포넌트를 기본 내보내기로 내보내기
export default App;
