import React, { Component } from 'react';
import "./ExpenseForm.css";
import { MdSend } from 'react-icons/md';

// ExpenseForm 컴포넌트 정의
export class ExpenseFrom extends Component {
  render() {
    return (
      // 지출 입력 폼을 나타내는 form 엘리먼트
      <form>
        <div className='form-center'>
          {/* 지출 항목 입력 필드 */}
          <div className='form-group'>
            <label htmlFor='charge'>지출 항목</label>
            <input 
              type="text" 
              className="form-control" 
              id="charge" 
              name="charge" 
              placeholder="예) 렌트비"
            />
          </div>

          {/* 비용 입력 필드 */}
          <div className='form-group'>
            <label htmlFor='amount'>비용</label>
            <input 
              type="number" 
              className="form-control" 
              id="amount" 
              name="amount" 
              placeholder="예) 100"
            />
          </div>
        </div>

        {/* 제출 버튼 */}
        <button type='submit' className='btn'>
          제출
          <MdSend className='btn-icon'/>
        </button>
      </form>
    );
  }
}

export default ExpenseFrom;
