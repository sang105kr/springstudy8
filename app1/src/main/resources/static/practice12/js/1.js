/**
 * 
 */
 'use strict';
 
 const $save = document.getElementById('save');
 const $name = document.getElementById('name');
 const $hackbun = document.getElementById('hackbun');
 const $errmsg = document.getElementById('errmsg');

 $save.addEventListener('click', handler, false);
 
 function handler(evt){
   console.log('클릭!');
   if(!window.sessionStorage) {
     $errmsg.textContent = '세션 스토리지를 지원하지 않는 브라우저 입니다.';
     return;
    }
   if($name.value.trim().length == 0){
     $errmsg.textContent = '이름을 입력하세요!';
     $name.focus();
     return;
   } 
   window.sessionStorage.setItem($name.value,$hackbun.value);
   $errmsg.textContent = '';
   document.querySelector('form').reset();
 }