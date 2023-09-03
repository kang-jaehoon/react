import React, { Component } from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

export class ExpenseList extends Component {
  render() {
    console.log(this.props.initialExpenses)
    return (
      <>
        {/* 목록을 나타내는 ul 요소 설정 */}
        <ul className='list'>
          {/* 개별 지출 항목을 나타내는 ExpenseItem 컴포넌트를 포함합니다. */}
          {this.props.initialExpenses.map(expense => {
            return (
              <ExpenseItem 
                expense={expense}
                key={expense.id}
                handleDelete={this.props.handleDelete}
                />
            )
          })}
        </ul>
        
        {/* 목록을 지우는 버튼 */}
        <button className='btn'>
          목록 지우기
          <MdDelete className='btn-icon' />
        </button>
      </>
    );
  }
}

export default ExpenseList;
