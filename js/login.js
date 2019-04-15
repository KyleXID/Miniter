const loginbutton = document.getElementById('loginbt');

loginbutton.addEventListener('click',function(){
  const id = document.getElementById('id').value;
  const passWord = document.getElementById('pw').value;

  if(!id || id.length <  5){
    alert('아이디를 입력해주세요.');
    return;
  }

  if(!passWord || passWord.length < 5){
    alert('비밀번호를 입력해주세요.');
    return;
  } else {
      alert('로그인 성공!!');
    }
});

const id = document.getElementById('id');
const passWord = document.getElementById('pw');

id.addEventListener('keyup',function(){
  const cautionid = document.getElementsByClassName('cautionid')[0];
  const border = document.getElementById('id');
  
  if(id.value.length < 5) {
    cautionid.innerHTML = 'Please enter at least 5 character';
    border.classList.add("iderror");
   
  } else {
      cautionid.innerHTML = '';
      border.classList.remove("iderror");
    }
})

passWord.addEventListener('keyup',function(){
  const cautionid = document.getElementsByClassName('cautionid')[1];
  const border = document.getElementById('pw');
  
  if(passWord.value.length < 5) {
    cautionid.innerHTML = 'Please enter at least 5 character';
    border.classList.add("iderror");
   
  } else {
      cautionid.innerHTML = '';
      border.classList.remove("iderror");
    }
});