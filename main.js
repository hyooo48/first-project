let ComputerNum
let Button = document.getElementById("button")
let userNum = document.getElementById("userNum")
let answer = document.getElementById("answer")
let resetButton = document.getElementById("reset-button")
let chance = 5
let chanceArea = document.getElementById("chance")
let gameOver = false
let history = []
let imageArea = document.querySelector(".image-style")


Button.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userNum.addEventListener("focus",blank)


function blank() {
    userNum.value = ""
}

function random(){
    ComputerNum = Math.floor(Math.random()*100)+1
    console.log("정답",ComputerNum)
}

// 사용자가 창에 userNum을 입력하고 button을 누르면 userNum의 값이 자바스크립트로 넘어온다
// userNum이 ComputerNum보다 크면 UP 출력
// userNum이 ComputerNum보다 작으면 DOWN 출력
// 그것도 아니면 정답 출력


function play(){
    let userValue = userNum.value

    if (userValue>100 || userValue<1){
        answer.textContent="1부터 100까지만 입력할 수 있습니다"
        return;
    }


    if (history.includes(userValue)){
        answer.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요"
        return;
    }

    chance --
    chanceArea.textContent = `남은 기회 : ${chance}번` 

    if (chance<1){
        gameOver = true
     }
    
     if (gameOver == true){
         Button.disabled = true
     }


    if(userValue>ComputerNum){
        answer.textContent = "Down";
        imageArea.src = "https://media.giphy.com/media/LkuPxRS0F6gmc/giphy.gif";
    }else if(userValue<ComputerNum){
        answer.textContent="UP"
        imageArea.src = "https://media.giphy.com/media/WTulELbICVKpnQ6S7h/giphy.gif";
    }else if (userValue==ComputerNum){
        answer.textContent="정답"
        imageArea.src = "https://media.giphy.com/media/l0MYxef0mpdcnQnvi/giphy.gif";
    }

    history.push(userValue)
 

}





function reset() {
    userNum.value =""   // userNum 창이 깨끗하게 정리되고
    random()   // 새로운 번호 생성
    answer.textContent = "게임을 리셋합니다"
    imageArea.src = "https://media.giphy.com/media/SXS950PdvjSfu9bCpV/giphy-downsized-large.gif";
}





random()
