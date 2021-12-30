/**
 * 
 */
 'use strict';
  
 const $search = document.getElementById('search');
 const $name = document.getElementById('name');
 const $hackbun = document.getElementById('hackbun');
 const $errmsg = document.getElementById('errmsg');

 $search.addEventListener('click', handler, false);
 
 listAll();

 function listAll(){
  let tagStr = `<table border='1'>
                  <thead>
                    <tr>
                      <th>이름</th>
                      <th>학번</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>`;

  const itemCnt = window.sessionStorage.length;										
  for(let i=0; i<itemCnt; i++ ){
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);

    tagStr +=	`<tr>
                <td>${key}</td>
                <td>${value}</td>
                <td><button id='del'>삭제</button></td>
               </tr>`;
  }

  tagStr += `	</tbody>
            </table>`;

  document.getElementById('listAll').innerHTML = tagStr;
 }

 function handler(evt){
   console.log('클릭!');
   if($name.value.trim().length == 0){
    $errmsg.textContent = '검색할 이름을 입력하세요!';
    $name.focus();
    return;
  } 
   const value = window.sessionStorage.getItem($name.value);
   if(value){
     $hackbun.value = value;
     $errmsg.textContent = '';
   }else{
     $errmsg.textContent = '찾고자하는 이름이 없습니다!';
   }

 }