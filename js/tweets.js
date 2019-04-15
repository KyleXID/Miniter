let myName = 'Hyungju Lee';

let count = 0;
let data = {
  "result": [{
    "contents": "Name It, and They Will Come",
    "date": "2019-03-27",
    "user": "Dan Abramov"
  },{
    "contents": "첫 트윗",
    "date": "2019-03-27",
    "user": "Hyungju Lee"
  },{
    "contents": "Landed in SF. Gonna be here until Friday. ",
    "date": "2019-03-24",
    "user": "Dan Abramov"
  },{
    "contents": "I love React and Vue and don't like framework wars ",
    "date": "2019-03-23",
    "user": "Hyungju Lee"
  },{
    "contents": "Y’all have been phenomenal. Thank you for sharing your earnest thoughts. I’m so grateful. Much to chew on. ",
    "date": "2019-03-23",
    "user": "Dan Abramov"
  },{
    "contents": "roughly 2 years as an indie dev now, it's hard not to give up sometimes, I'm not even close to where I'd like to be, but seeing other indie developers succeed is still motivating—the potential for complete freedom over your time is too enticing",
    "date": "2019-03-22",
    "user": "TJ Holowaychuk"
  },{
    "contents": "Huh",
    "date": "2019-03-21",
    "user": "Dan Abramov"
  },{
    "contents": "They’re gonna have a problem hiring for this role.",
    "date": "2019-03-20",
    "user": "Dan Abramov"
  },{
    "contents": "오늘의 신기한 경험 일본어/영어로된 README 에 대한 한국어  PR 을 보냈는데 owner 가 일본인이라 일본어로 리뷰 달아줌. 일본어를 1도 몰라 번역기 돌려서 대충 알아듣고 수정함. owner 는 한국어를 몰라 자기 트위터 친구한테 물어보고 merge 해줬다함. ㅎㅎㅎㅎ",
    "date": "2019-03-06",
    "user": "Insanehong"
  }]
};

const tweetdl = document.getElementsByClassName('mytweet-box')[0];
const caution = document.getElementById('caution');
const tweetbt = document.getElementsByClassName('btbox')[0];

console.log(tweetdl.value.length);

tweetdl.addEventListener('keyup',function(){
  if(tweetdl.value.length < 3) {
    caution.innerHTML ='Please enter at least 3 character';
    caution.className = 'cautioncolor';
    tweetdl.className = 'mytweet-boxerror';
  } else {
    caution.innerHTML ='';
    tweetdl.className = 'mytweet-box';
  }
});



let newobject = {};
let rightNow = new Date();
let year = rightNow.getFullYear();
let month = rightNow.getMonth()+1;
let date = rightNow.getDate();

tweetbt.addEventListener('click', function(){
  console.log('뭐가먼저');

 newobject = {
    contents: tweetdl.value,
    date:  year + '-' + month + '-' + date,
    user: myName
  }

  // newobject["contents"] = tweetdl.value;

  // newobject["date"] = year + '-' + month + '-' + date;

  // newobject["user"] = myName;



  console.log('뭐가먼저2222');
  if(tweetdl.value.length < 3) {
    alert('3자 이상 입력해주세요.');
  } else {
      data.result.unshift(newobject);
      datedata();
      console.log(data.result);
      alert('등록되었습니다.');

      function createListAdd() {

        let ul = document.getElementById("list");
        let li = document.createElement("li");
        li.className = 'toli';

        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");

        p1.appendChild(document.createTextNode(newobject.user));
        p1.className = 'user';
        p2.appendChild(document.createTextNode(newobject.contents));
        p2.className = 'contents';
        p3.appendChild(document.createTextNode(year + '년 ' + month + '월 ' + date + '일'));
        p3.className = 'date';

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);

        ul.prepend(li);
      }
      countTweets();
      updateTweets();
      createListAdd();
    }

    tweetdl.value = ''
});



let tweetdate = {
  date : {}
};
function datedata() {
  for (let i=0; i<data.result.length; i++) {
    tweetdate.date[i] = data.result[i].date.split("-");
  }
}
datedata();

function updateName() {
  let mainName = document.getElementById('myname');
  mainName.innerHTML = myName;
}
updateName();

function countTweets() {
  count = '';
  for (let i=0; i<data.result.length; i++) {
    if (data.result[i].user === myName) {
      count++;
    }
  } 
  
 // return count;
} 

console.log(count);
var result = countTweets();
console.log(count);

function updateTweets() {
  let mytweets = document.getElementsByClassName('tweetnb2')[0];
  mytweets.innerHTML = count;
}

console.log(updateTweets());

function createList() {

  let ul = document.getElementById("list");
  // ul.innerHTML = '';

  for (let i=0; i<data.result.length; i++) {
    let li = document.createElement("li");
    li.className = 'toli';

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

   p1.appendChild(document.createTextNode(data.result[i].user));
   p1.className = 'user';
   p2.appendChild(document.createTextNode(data.result[i].contents));
   p2.className = 'contents';
   console.log(i, tweetdate, tweetdate.date[i])
   p3.appendChild(document.createTextNode(tweetdate.date[i][0] + '년 ' + Number(tweetdate.date[i][1]) + '월 ' + tweetdate.date[i][2] + '일'));
   p3.className = 'date';

   li.appendChild(p1);
   li.appendChild(p2);
   li.appendChild(p3);

   ul.appendChild(li);
  }
}

createList();




