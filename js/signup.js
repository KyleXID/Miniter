
const signbutton = document.getElementsByClassName('button')[0];


signbutton.addEventListener('click',function(){
const passWord = document.getElementById('pw').value;
const cfPassWord = document.getElementById('cfpw').value;
const id = document.getElementById('enterid').value;
const name = document.getElementById('enternm').value;
const profile = document.getElementById('enterpf').value;
  if(!id || id.length <  5){
    alert('아이디를 입력해주세요.');
    return;
  }

  if(!name || name.length < 3){
    alert('이름을 입력해주세요.');
    return;
  }

  if(!passWord || passWord.length < 5){
    alert('비밀번호를 입력해주세요.');
    return;
  }

  if(!cfPassWord || cfPassWord < 5){
    alert('비밀번호 확인을 입력해주세요.');
    return;
  }

  if(!profile){
    alert('프로필을 입력해주세요.');
    return;
  }

  if(passWord !== cfPassWord){
    alert('비밀번호를 확인해주세요.')
    return;
  } else {
      alert('로그인 성공!!');
    }
});

const passWord = document.getElementById('pw');
const cfPassWord = document.getElementById('cfpw');
const id = document.getElementById('enterid');
const name = document.getElementById('enternm');
const profile = document.getElementById('enterpf');

id.addEventListener('keyup',function(){
  const cautionid = document.getElementById('cautionid');
  const borderup = document.getElementsByClassName('idboxup')[0];
  const borderlo = document.getElementsByClassName('idboxlo')[0];
  
  if(id.value.length < 5) {
    cautionid.innerHTML = 'Please enter at least 5 character';
    borderup.classList.add("idboxuperror");
    borderlo.classList.add("idboxloerror");
   
  } else {
      cautionid.innerHTML = '';
      borderup.classList.remove("idboxuperror");
      borderlo.classList.remove("idboxloerror");
    }
})

name.addEventListener('keyup',function(){
  const cautionnm = document.getElementById('cautionnm');
  const borderup = document.getElementsByClassName('idboxup')[1];
  const borderlo = document.getElementsByClassName('idboxlo')[1];
  
  if(name.value.length < 3) {
    cautionnm.innerHTML = 'Please enter at least 3 character';
    borderup.classList.add("idboxuperror");
    borderlo.classList.add("idboxloerror");
   
  } else {
      cautionnm.innerHTML = '';
      borderup.classList.remove("idboxuperror");
      borderlo.classList.remove("idboxloerror");
    }
});

passWord.addEventListener('keyup',function(){
  const cautionpw = document.getElementById('cautionpw');
  const borderup = document.getElementsByClassName('idboxup')[2];
  const borderlo = document.getElementsByClassName('idboxlo')[2];
  
  if(passWord.value.length < 5) {
    cautionpw.innerHTML = 'Please enter at least 5 character';
    borderup.classList.add("idboxuperror");
    borderlo.classList.add("idboxloerror");
   
  } else {
      cautionpw.innerHTML = '';
      borderup.classList.remove("idboxuperror");
      borderlo.classList.remove("idboxloerror");
    }
});

cfPassWord.addEventListener('keyup',function(){
  const cautioncfpw = document.getElementById('cautioncfpw');
  const borderup = document.getElementsByClassName('idboxup')[3];
  const borderlo = document.getElementsByClassName('idboxlo')[3];
  
  if(cfPassWord.value.length < 5) {
    cautioncfpw.innerHTML = 'Please enter at least 5 character';
    borderup.classList.add("idboxuperror");
    borderlo.classList.add("idboxloerror");
  } else if(cfPassWord.value !== passWord.value) {
      cautioncfpw.innerHTML = 'Your password and confirmation password do not match.';
      borderup.classList.add("idboxuperror");
      borderlo.classList.add("idboxloerror");
    } else {
        cautioncfpw.innerHTML = '';
        borderup.classList.remove("idboxuperror");
        borderlo.classList.remove("idboxloerror");
      }

  
});


// tweetdl.addEventListener('keyup',function(){
//   if(tweetdl.value.length < 10) {
//     caution.innerHTML ='Please enter at least 10character';
//     caution.className = 'cautioncolor';
//     tweetdl.className = 'mytweet-boxerror';
//   } else {
//     caution.innerHTML ='';
//     tweetdl.className = 'mytweet-box';
//   }
// });

// tweetbt.addEventListener('click', function(){
//   if(tweetdl.value.length < 10) {
//     alert('10자 이상 입력해주세요.');
//     return;
//   }
// });