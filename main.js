//1~45 번 숫자 공에서 6개를 뽑아서 그걸로 당첨 여부를 확인하는 복권. 
//보너스 번호도 추가로 뽑고 5개 맞추고 1개 틀렸지만 그 틀린 번호가 이 보너스 번호와 일치하면 2등.
// 그냥 5개만 맞춘 사람은 3등임. 그렇다고 이런거에 빠지진 마시고.. 사지도 마시고..

// 1. 컴퓨터가 1~45 수를 6개 뽑아서 출력		(중복 허용)	
// 1. 내가 한 게임을 구매했다고 가정하고		변수 p1 부터 ~ p6 까지 값 6 개 각각 주기	
// 2. 컴퓨터의 랜덤값도		변수명을 r[0] ~ r[5] 까지 변경해주기	


// 컴퓨터의 6개의 숫자랑 내꺼랑 각각 비교해서(6*6회) 몇개가 일치하는 지 세어 출력하기
// 컴퓨터의 두번째 번호가 첫번째 번호와 같을 경우 다시 뽑도록 하기


var com;
com = Math.floor(Math.random() * 45) + 1;
var p = new Array(5);
p = [0, 0, 0, 0, 0, 0];

// p[0] = 1;
// p[1] = 2;
// p[2] = 3;
// p[3] = 4;
// p[4] = 5;
// p[5] = 6;

var r = new Array(5);
r = [0, 0, 0, 0, 0, 0];

var bonus = 0;

var win = 0;
var outp = new Array(5);
var outp_win = 0;
var mainbox;
var textbox;
var textboxr1;
var textboxr2;
var textboxr3;
var textboxr4;
var textboxr5;
var textboxr0;

var mym;

var lotto1;
var lotto2;
var lotto3;
var lotto4;
var lotto5;
var lotto0;


window.onload = function(){
    mainbox = document.getElementById("all");
    rpcInputText = document.getElementById("rpc_input_text");       // 연결
    rpcInputTextr1 = document.getElementById("rpc_input_text_r1");       // 연결
    rpcInputTextr2 = document.getElementById("rpc_input_text_r2");       // 연결
    rpcInputTextr3 = document.getElementById("rpc_input_text_r3");       // 연결
    rpcInputTextr4 = document.getElementById("rpc_input_text_r4");       // 연결
    rpcInputTextr5 = document.getElementById("rpc_input_text_r5");       // 연결
    rpcInputTextr0 = document.getElementById("rpc_input_text_r0");       // 연결
    mymy = document.getElementById("my");       // 연결
    
    lotto1 = document.getElementById("mytext_box1");       // 연결
    lotto2 = document.getElementById("mytext_box2");       // 연결
    lotto3 = document.getElementById("mytext_box3");       // 연결
    lotto4 = document.getElementById("mytext_box4");       // 연결
    lotto5 = document.getElementById("mytext_box5");       // 연결
    lotto0 = document.getElementById("mytext_box0");       // 연결

}

function rpcInputButtonClick(){


r[0] = Math.floor(Math.random() * 45) + 1;
// dw(r[0] + "<br>");
textbox = r[0]+ '\n';
rpcInputText.value = textbox;
while (true) {
    r[1] = Math.floor(Math.random() * 45) + 1;
    if (r[0] != r[1]) {
        textboxr0 = r[1]+ '\n';
        rpcInputTextr0.value = textboxr0;
        // dw(r[1] + "<br>");
        break;
    }
}

while (true) {
    r[2] = Math.floor(Math.random() * 45) + 1;

    if (r[0] != r[2] && r[1] != r[2]) {
        textboxr1 = r[2]+ '\n';
        rpcInputTextr1.value = textboxr1;
        // dw(r[2] + "<br>");
        break;
    }
}

while (true) {
    r[3] = Math.floor(Math.random() * 45) + 1;

    if (r[0] != r[3] && r[1] != r[3] && r[2] != r[3]) {
        textboxr2 = r[3]+ '\n';
        rpcInputTextr2.value = textboxr2;
        // dw(r[3] + "<br>");
        break;
    }
}
while (true) {
    r[4] = Math.floor(Math.random() * 45) + 1;

    if (r[0] != r[4] && r[1] != r[4] && r[2] != r[4] && r[3] != r[4]) {
        textboxr3 = r[4]+ '\n';
        rpcInputTextr3.value = textboxr3;
        // dw(r[4] + "<br>");
        break;
    }
}
while (true) {
    r[5] = Math.floor(Math.random() * 45) + 1;

    if (r[0] != r[5] && r[1] != r[5] && r[2] != r[5] && r[3] != r[5] && r[4] != r[5]) {
        textboxr4 = r[5]+ '\n';
        rpcInputTextr4.value = textboxr4;
        // dw(r[5] + "<br>");
        break;
    }
}

//보너스
while (true) {
    bonus  = Math.floor(Math.random() * 45) + 1;

    if (r[0] != bonus && r[1] != bonus && r[2] != bonus && r[3] != bonus && r[4] != bonus && r[5] != bonus) {
        textboxr5 = bonus+ '\n';
        rpcInputTextr5.value = textboxr5;
        // dw("보너스 : "+bonus + "<br>");
        break;
    }
}

////    앞선 번호들과 비교하여 중복된 번호가 나온 경우 다시 번호를 뽑게 하기
//      (그렇게 해서 나온 번호도 또 검사를 계속 해야함)




// dw("<br>");

// dw(p[0] + "<br>");
// dw(p[1] + "<br>");
// dw(p[2] + "<br>");
// dw(p[3] + "<br>");
// dw(p[4] + "<br>");
// dw(p[5] + "<br>");


// p[0] = lotto1.value;
// p[1] = lotto2.value;
// p[2] = lotto3.value;
// p[3] = lotto4.value;
// p[4] = lotto5.value;
// p[5] = lotto6.value; 

mym = p[0]+ ' '+p[1]+ ' '+p[2]+ ' '+p[3]+ ' '+p[4]+ ' '+p[5];
my.value = mym;

            // 출력 창 번호 확인 영역






//구분

// 1
for (var i = 0; i <= 5; i = i + 1) {
    for (var j = 0; j <= 5; j = j + 1) {
        if (p[i] == r[j]) { win = win + 1; }
        else{ outp.push = p[i] }
    }
}
// dw("win :" + win + "<dr>");


switch (win) {
    case 3:
        // br()
        // dw("5등입니다.");
        break;
    case 4:
        // br()
        // dw("4등입니다.");
        break;
    case 5:
        for (var i = 0; i <= 5; i = i + 1) {
                if (outp[i] == bonus) { outp_win = outp_win + 1; }
        }
        if (outp_win >= 0){
            // br()
            // dw("2등입니다.");
        }
        else{
        // br()
        // dw("3등입니다.");
    }
        break;
    case 6:
        // br()
        // dw("1등입니다.");
        break;
    default:
        // br()
        // dw("꽝입니다.");
        break;
}

}


