import { Component } from "react";
import "./App.css";

// App 컴포넌트를 정의합니다.
class App extends Component {
  render() {
    return (
      // 전체 페이지를 감싸는 메인 컨테이너입니다.
      <main className="main-container">
        {/* 페이지 제목 */}
        <h1>예산 계산기</h1>

        {/* 지출 입력 폼 영역 */}
        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          {/* 지출 입력 폼 컴포넌트가 여기에 들어갈 예정 */}
        </div>

        {/* 지출 목록 영역 */}
        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          {/* 지출 목록 컴포넌트가 여기에 들어갈 예정 */}
        </div>

        {/* 총지출 표시 영역 */}
        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem' }}>
            총지출:
            <span>원</span> {/* 총지출 금액이 표시될 위치 */}
          </p>
        </div>
      </main>
    );
  }
}

export default App;
