import React from 'react';
import { useState } from 'react';
import '../App.css';

const KOContent = ({data, em, pw, inputs, loading, logo}) => {

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
    
          }, 4000);
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
  

                

                return (
                <div className='조회화면'>
                    <p>({data[i].하다시연번})<br/>
                    {data[i].전체이름}님,<br/>
                    안녕하세요!</p>
                    <p>현재 외국인등록증 신청 진행 상황은<br/>
                    <b>{진행상황}</b>입니다.</p>
                    

                    {
                        data[i].진행상황 === '2.서류 준비 완료' || data[i].진행상황 === '3.서류 출력 완료' || data[i].진행상황 === '4-1.서류 접수 완료'
                        ? setDate(true)
                        : null
                    }

                    {
                        date === true
                        ? <출입국제출일 />
                        : null
                    }

                    {

                        data[i].진행상황 === '1.보완서류 요청'
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

        if (data[i].결제확인완료 !== "checked") {
            document.getElementById('결제').style.display = "none"
        }

        return <div></div>

        function Airt() {
            window.location.href = `${data[i].app보완링크}`
        }

        function 결제링크() {
            window.location.href = `${data[i].결제용링크}`
        }

        function 결제버튼() {
            return <button id="결제" onClick={() => {setLink3(true)}}>결제하기</button>
        }

        function 출입국제출일() {
            return <p>출입국 제출일 : {data[i].출입국제출일}</p>
        }

        function Form() {

            const rea = [data[i].증명사진보완, data[i].여권보완, data[i].사증보완, 
                        data[i].재학보완, data[i].거주지보완, data[i].GKS보완, data[i].수원보완];

            const newRea = rea.filter(item => {
                if (item != null && item !== '보완완료') {
                    return true;
                } return false;

            }).map((m) => {
                let aaa = m.replace(/\"/g,'')
                return <p id='reasons'>◼ {aaa}</p>
            })


            

            

            return (
                <>
                    <p>ㅡ</p>
                    <p>보완 사유는 아래와 같습니다<br/>
                    <span id="기간안내">(보완 마감일 : {data[i].보완마감일})</span></p>

                    <div id="reasonBox">{newRea}<br/>
                    (최종 검토 시간 : {data[i].최종검토})
                    </div>

                   
                    
                    
                    
                    
                    {

                        data[i].결제확인완료 !== 'checked'
                        ? setPayment(true)
                        : null

                    }

                    {
                        payment === true
                        ? <결제버튼/>
                        : null
                    }
                    
                    <button id="납부하기" onClick={() => {setLink2(true)}}>보완서류 제출</button>

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
export default KOContent