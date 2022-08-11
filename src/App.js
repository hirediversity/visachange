import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';


var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyVWc7psFCmYWDcd'}).base('appL44cwktJKhNKIP');

const table = base('자격변경 업무 처리');
const data = [];

const getRecords = async () => {
  const records = await table.select({
      maxRecords: 99999,
      view: 'App 뷰'
  }).eachPage((lists, fetchNextPage) => {
    lists.forEach((list) => data.push(list.fields))
    fetchNextPage();
  });
}

getRecords();


function App() {

  const [box, setBox] = useState(false)

  return (
    <div className="App">
      <div id="search">
        
        <p id='title'>* 비자 자격변경 신청 현황 조회 *</p>
        <input id="email" placeholder='e-mail'></input>
        <input id="rcNumber" placeholder='password'></input>
        <button type="button" className="btn btn-primary btn-sm" id="searchBtn" onClick={() => {
          setBox(true);
          }}>Login</button>

          <p id='loginform'>If you can't log in please try again 5 minutes later, do not refresh the page.
          </p>
       
          <div id="loading" className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
     

      </div>
      <p></p>
      <div className="container">
          {
            box === true
            ? 
            <Content 
            data={data}
            pw={document.getElementById('rcNumber').value}
            em={document.getElementById('email').value}
            inputs={document.getElementById('search')}
            loading={document.getElementById('loading')}
            logo={document.getElementById('hirelogo')}
            />

            // alert('납부 기간이 아닙니다. (납부 기간 : 매월 20일까지)\nIt is not the payment period.\n(until the 20th of every month)\n现在不是缴纳费用的期间。\n(每月20日为截止日)')
            : null
          }
      </div>
    </div>
  )
}

export default App
