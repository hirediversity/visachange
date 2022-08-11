import React, { useState } from 'react';
import './App.css';
import CNContent from './components/CNContent';


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


function CNApp() {

  const [box, setBox] = useState(false)

  return (
    <div className="App">
      <div id="search2">
        
        <p id='title'>* 비자 자격변경 신청 현황 조회 *</p>
        <input id="email2" placeholder='e-mail'></input>
        <input id="rcNumber2" placeholder='password'></input>
        <button type="button" className="btn btn-primary btn-sm" id="searchBtn" onClick={() => {
          setBox(true);
          }}>Login</button>

          <p id='loginform'>如果无法进行登录，请将本页面维持5分钟之后再次输入账号密码进行尝试。谢谢
          </p>
       
          <div id="loading2" className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
     

      </div>
      <p></p>
      <div className="container">
          {
            box === true
            ? 
            <CNContent 
            data={data}
            pw={document.getElementById('rcNumber2').value}
            em={document.getElementById('email2').value}
            inputs={document.getElementById('search2')}
            loading={document.getElementById('loading2')}
            logo={document.getElementById('hirelogo')}
            />

            // alert('납부 기간이 아닙니다. (납부 기간 : 매월 20일까지)\nIt is not the payment period.\n(until the 20th of every month)\n现在不是缴纳费用的期间。\n(每月20日为截止日)')
            : null
          }
      </div>
    </div>
  )
}

export default CNApp
