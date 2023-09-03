import { Component } from "react";
import "./App.css";
import ExpenseFrom from "./components/ExpenseFrom";
import ExpenseList from "./components/ExpenseList";

// App 컴포넌트를 정의합니다.
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id: 1, charge: "렌트비", amount: 2000},
        { id: 2, charge: "교통비", amount: 400},
        { id: 3, charge: "식비", amount: 1400}
      ]
    }
  }

  initialExpenses = [
    { id: 1, charge: "렌트비", amount: 2000},
    { id: 2, charge: "교통비", amount: 400},
    { id: 3, charge: "식비", amount: 1400}
  ]

  handleDelete = (id) => {
    const newExpenses = this.state.expenses.filter(expense => expense.id !== id)
    console.log(newExpenses);
    this.setState({expenses: newExpenses});
  }

  render() {
    return (
      // 전체 페이지를 감싸는 메인 컨테이너입니다.
      <main className="main-container">
        {/* 페이지 제목 */}
        <h1>예산 계산기</h1>

        {/* ExpenseFrom 영역 */}
        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          {/* ExpenseFrom 컴포넌트가 여기에 들어갈 예정 */}
          <ExpenseFrom></ExpenseFrom>
        </div>

        {/* ExpenseList 영역 */}
        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
          {/* ExpenseList 컴포넌트가 여기에 들어갈 예정 */}
          <ExpenseList 
            initialExpenses={this.state.expenses}
            handleDelete={this.handleDelete}
            />
            
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
