import React, { Component } from 'react';
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from 'react-icons/md';

// ExpenseItem 컴포넌트 정의
export class ExpenseItem extends Component {
  render() {
    return (
      // 각 비용 항목을 나타내는 리스트 아이템 (li 엘리먼트)
      <li className='item'>
        {/* 비용 항목 정보를 담은 div 요소 */}
        <div className='info'>
          <span className='expense'>{this.props.expense.charge}</span> {/* 학원 등록 비용 텍스트 */}
          <span className='amount'>{this.props.expense.amount}</span>  {/* 비용 금액 텍스트 */}
        </div>
        <div>
          {/* 수정 버튼 */}
          <button className='edit-btn'><MdEdit /></button>
          {/* 삭제 버튼 */}
          <button className='clear-btn' onClick={() => this.props.handleDelete(this.props.expense.id)}>
            <MdDelete />
          </button>
        </div>
      </li>
    );
  }
}

export default ExpenseItem;
