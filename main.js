var win; // 컴퓨터 숫자와 플레이어 숫자 중복 확인용
var bonus = 0; // 보너스 번호확인
var bn1; // 컴퓨터 랜덤 돌릴때 필요한점수
var bn2; // 플레이어 랜덤 돌릴때 필요한 변수
var bot = new Array(); // 컴퓨터 랜덤출력 번호 전에 p
var lotto_bn1 = new Array();
var player = new Array(); // 플레이어 로또 번호 ==전에 r 
var lotto_bn2 = new Array();
var log; // 체크박스 체크유무 확인
var input_text // 컴퓨터 로또번호 출력 텍스트
var mainbox; // html 전체 div
var mytext_box0; // 수동 입력시 정보 받아오는용
var mytext_box1;
var mytext_box2;
var mytext_box3;
var mytext_box4;
var mytext_box5;
var rpcInputTextr0; // 컴퓨터 로또번호 출력용
var rpcInputTextr1;
var rpcInputTextr2;
var rpcInputTextr3;
var rpcInputTextr4;
var rpcInputTextr5;
var rpcInputTextr6;
var text;
var endvalue;
var result;

var mym;

window.onload = function(){
    mainbox = document.getElementById("all"); // 전체 div
    my = document.getElementById("my");
    mytext_box0=document.getElementById("mytext_box0"); // 수동으로 입력
    mytext_box1=document.getElementById("mytext_box1");
    mytext_box2=document.getElementById("mytext_box2");
    mytext_box3=document.getElementById("mytext_box3");
    mytext_box4=document.getElementById("mytext_box4");
    mytext_box5=document.getElementById("mytext_box5");
    log = document.getElementById('rpc_input_checkbox');
    input_text=document.getElementById('input_tex');
    // 오토가 뽑은 번호
    rpcInputTextr0 = document.getElementById("rpc_input_text_r0");       // 연결 R1번
    rpcInputTextr1 = document.getElementById("rpc_input_text_r1");       // 연결 R2번
    rpcInputTextr2 = document.getElementById("rpc_input_text_r2");       // 연결
    rpcInputTextr3 = document.getElementById("rpc_input_text_r3");       // 연결
    rpcInputTextr4 = document.getElementById("rpc_input_text_r4");       // 연결
    rpcInputTextr5 = document.getElementById("rpc_input_text_r5");       // 연결
    rpcInputTextr6 = document.getElementById("rpc_input_text_r6");       // 연결
    text = document.getElementById('checkbox_on_off');
       
} 
// 수동 변수지정
function plusAs(){
    player[0]=mytext_box0.value;
    player[1]=mytext_box1.value;
    player[2]=mytext_box2.value;
    player[3]=mytext_box3.value;
    player[4]=mytext_box4.value;
    player[5]=mytext_box5.value;
    }
// 자동 변수 지정
function rand(){
    for(var d=0; d<=5; d=d+1){
    var spl = lotto_bn2.splice(Math.floor(Math.random()*bn2), 1);  // 랜덤으로 변수를 뽑아서 splice로 변수 번째의 숫자를 기준해서 찢는다
    player[d] = spl// 추출한 숫자를 저장
        bn2=bn2-1}
    }
    // 체크박스 누를시 수동입력 투명으로 바뀜
function check(){
    console.log(log.checked);
    if(log.checked== true){
        text.style.opacity = '0';
    }else{
        text.style.opacity = '1';
    }  
    
}

// 버튼동작시
function rpcInputButtonClick(){ 

// 랜덤 변수 초기화
    lotto_bn1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];  // 배열 1~45
    lotto_bn2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
    bn1 = 45; 
    bn2 = 45;
    win = 0;
    bonus = 0;        
    bot = [0,0,0,0,0,0,0]
    player = [0,0,0,0,0,0];
 
// 수동, 자동 확인툴
    if(log.checked== true){
        rand()
    }else{
        plusAs()
    }

// 수동일떄 프로그렘이 바로 종료되게
var set = new Set(player);
if (set.size !== player.length){
    alert("중복된 숫자가 있습니다.");
    } else {

// 컴퓨터 랜덤 돌리기

for(var c=0; c<=6; c=c+1){
   var spl = lotto_bn1.splice(Math.floor(Math.random()*bn1), 1);  // 랜덤으로 변수를 뽑아서 splice로 변수 번째의 숫자를 기준해서 찢는다
    bot[c] = spl// 추출한 숫자를 저장

    bn1=bn1-1}




    // 검수 및 정답확인
for(i=0;i<=5; i=i+1){
    for(y=0;y<=5;y= y+1){
    if(player[i] == bot[y]){
        win = win+1}}
    if(player[i]==bot[6]){     //보너스 번호 확인
        bonus = bonus + 1 }}


    // 정답 출력
    rpcInputTextr0.value = bot[0]
    rpcInputTextr1.value = bot[1]
    rpcInputTextr2.value = bot[2]
    rpcInputTextr3.value = bot[3]
    rpcInputTextr4.value = bot[4]
    rpcInputTextr5.value = bot[5]
    rpcInputTextr6.value = bot[6]

    if(win < 3){
        result = "꽝입니다.";
    } else if(win == 3){
         result = "5등입니다.";
    } else if(win == 4){
         result = "4등입니다.";
    } else if(win == 5){
         if(bonus == 1){
            result = "2등입니다.";
            } else {
                 result = "3등입니다";}
    } else if(win == 6){
         result = "1등입니다.";}


    mym = player[0]+ ' '+player[1]+ ' '+player[2]+ ' '+player[3]+ ' '+player[4]+ ' '+player[5]+' ';
    endvalue = mym
//    endvalue = endvalue + "\n";
   endvalue = endvalue +'\n'+ result;
    // my.value = mym +"<br>"+ result;
    my.innerHTML = endvalue;
    }

}