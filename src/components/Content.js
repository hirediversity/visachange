import React from 'react';
import { useState } from 'react';
import '../App.css';

const Content = ({data, em, pw, inputs, loading, logo}) => {

    let [link, setLink] = useState(false);
    let [open, setOpen] = useState(false);
    let [link2, setLink2] = useState(false);
    let [link3, setLink3] = useState(false);
    let [payment, setPayment] = useState(false);
    let [date, setDate] = useState(false);
    let errors = [];


    if (em.length !== 0 || pw.length !== 0) {
        loading.style.display = 'flex';

        setTimeout(() => {
            loading.style.display = 'none';
            inputs.style.display = 'none';
            
            setOpen(true)
    
          }, 3000);
    } 
    else {
        alert('이메일 또는 패스워드를 입력해주세요')
        window.location.reload();
    }
    


      function Normal() {

        for (var i = 0; i < data.length; i++) {

            if (em == data[i].이메일 && pw == data[i].하다시연번) {
                inputs.style.display = 'none';
                logo.style.display = 'none';

                let 진행상황 = data[i].진행상황.replace(/\.|\-|[(0-9)]/g,'');
                let 진행중국어 = 진행상황.replace('사범처리대상', '罚款处理对象')
                                        .replace('심사대기', '材料审核待机')
                                        .replace('검토중', '材料审核中')
                                        .replace('서류 보완 요청', '材料补交请求中')
                                        .replace('서류 준비 완료', '材料准备完成')
                                        .replace('전자민원 신청 완료', '出入境申请提交完成')
                                        .replace('학생에게 전자민원 신청 완료 안내 완료', '申请提交完成学生通知完毕')
                                        .replace('출입국 사무소 접수 완료', '出入境受理完成')
                                        .replace('학생에게 출입국 사무소 접수 완료 안내 완료', '受理完成学生通知完毕')
                                        .replace('반려', '材料已驳回')
                                        .replace('이첩', '出入境移交处理')
                                        .replace('학생에게 반려 이메일 안내 완료', '材料驳回通知邮件已发送')
                                        .replace('반려 서류 준비 완료', '驳回材料提交准备完成')
                                        .replace('반려 보완 완료', '学生驳回材料补交完成')
                                        .replace('허가서 발급 완료', '出入境许可书发放完成')
                                        .replace('학생에게 허가서 발송 완료', '许可书向学生发送完成')
                                        .replace('모든 절차 완료', '所有步骤均已完成')
                                        .replace('이첩 후 처리 완료', '学生移交后处理完成')
                                        .replace('무효 신청', '无效申请')
                let 진행영어 = 진행상황.replace('사법처리대상', 'Subject to legal action')
                                        .replace('심사대기', 'Waiting for Review')
                                        .replace('검토중', 'Under Review')
                                        .replace('서류 보완 요청', 'Request for supplementary documents')
                                        .replace('서류 준비 완료', 'Documents ready')
                                        .replace('전자민원 신청 완료', 'Submitted to the immigration')
                                        .replace('학생에게 전자민원 신청 완료 안내 완료', 'Completion of announcement about submission to the immigration')
                                        .replace('출입국 사무소 접수 완료', 'Submitted to the immigration')
                                        .replace('학생에게 출입국 사무소 접수 완료 안내 완료', 'Completion of announcement about submission to the immigration')
                                        .replace('반려', 'Rejection from the immigration')
                                        .replace('이첩', 'Transfer of Notification from immigration')
                                        .replace('학생에게 반려 이메일 안내 완료', 'Rejected Documents Notified')
                                        .replace('반려 서류 준비 완료', 'Supplement documents ready')
                                        .replace('반려 보완 완료', 'Rejected document supplemented')
                                        .replace('허가서 발급 완료', 'Permission of Extension issued')
                                        .replace('학생에게 허가서 발송 완료', 'Permission of Extension Sent')
                                        .replace('모든 절차 완료', 'All Processed Complete')
                                        .replace('이첩 후 처리 완료', 'Post-Transfer Processing Completed')
                                        .replace('무효 신청', 'application for invalidation')

                

                return (
                <div className='조회화면'>
                    <p>({data[i].하다시연번})<br/>
                    {data[i].이름_합}님,<br/>
                    안녕하세요!</p>
                    <p>현재 외국인등록증 신청 진행 상황은<br/>
                    <b>{진행상황}</b>입니다.</p>

                    <p>{data[i].이름_합}同学,<br/>
                    目前国人登陆证申请进行状态为<br/>
                    <b>{진행중국어}</b></p>

                    <p>Hello, {data[i].이름_합}!<br/>
                    Your current status for the ARC application is:<br/>
                    <b>{진행영어}</b></p>

                    

                    {
                        data[i].진행상황 === '3-1. 전자민원 신청 완료' || data[i].진행상황 === '3-3. 출입국 사무소 접수 완료'
                        ? setDate(true)
                        : null
                    }

                    {
                        date === true
                        ? <출입국제출일 />
                        : null
                    }

                    {

                        data[i].진행상황 === '1. 서류 보완 요청'
                        ? setLink(true)
                        : null

                    }

                    {
                        
                        link === true
                        ? <Form />
                        : null
                    }

                    

                </div>
                )
            } else {
                errors.push(i)
            }
        }

        if (errors.length === data.length) {
            alert('신청 정보가 없거나,\n입력하신 정보가 틀렸습니다.');
            window.location.reload()
        }

        if (data[i].결제확인용 === "") {
            document.getElementById('결제').style.display = "none"
        }

        return <div></div>

        function Airt() {
            window.location.href = `${data[i].보완폼링크}`
        }

        function 결제링크() {
            window.location.href = `${data[i].결제폼링크}`
        }

        function 결제버튼() {
            return <button id="결제" onClick={() => {setLink3(true)}}>결제하기</button>
        }

        function 출입국제출일() {
            return <p>전자민원 신청일 : {data[i].APP전자민원신청일}</p>
        }

        function Form() {

            const rea = [data[i].체류도래보완_진행중, data[i].초과학기_진행중, data[i].졸업논문_진행중, 
                        data[i].상위진학_진행중, data[i].어학원_진행중, data[i].거주지보완_진행중];

            const newRea = rea.filter(item => {
                if (item != null && item !== '보완완료') {
                    return true;
                } return false;

            }).map((m) => {
                // let aaa = m.replace(/\"/g,'')
                let aaa = m
                return <p id='reasons'>◼ {aaa}</p>
            })


            

            

            return (
                <>
                    <p>ㅡ</p>
                    <p>보완 사유는 아래와 같습니다 / 需要补交的材料如下<br/>
                    The reasons for supplementation are as follows.<br/></p>

                    <div id="reasonBox">{newRea}<br/>
                    (최종 검토 시간 : {data[i].최종검토})
                    </div>

                   
                    
                    
                    
                    
                    {

                        data[i].결제확인용 == null
                        ? setPayment(true)
                        : null

                    }

                    {
                        payment === true
                        ? <결제버튼/>
                        : null
                    }
                    
                    <button id="납부하기" onClick={() => {setLink2(true)}}>보완서류 제출 / 点击补交材料<br/>Submission of supplementary documents</button>

                    {
                        link2 === true
                        ? <Airt />
                        : null
                    }

                    {
                        link3 === true
                        ? <결제링크 />
                        : null
                    }
                </>
            )
        }
        
      }

      return (
        <div>
            {
                open === true
                ? <Normal />
                : null
            }
        </div>
    )
}
export default Content