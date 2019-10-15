export const getRoundOutcome = userChoice => {
    const computerChoice = getRandomChoice().name; //computerChoice는 랜덤객체의 이름
    let result;
  
    if(userChoice === "rock"){ //함수호출 시 받아온 값이 주먹이면,
      result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
    } //결과는 랜덤객체의 이름이 가위일때 이기고 아니면 짐
    if(userChoice === "paper"){
      result = computerChoice === "rock" ? "Victory!" : "Defeat!";
    }
    if(userChoice === "scissors"){
      result = computerChoice === "paper" ? "Victory!" : "Defeat!";
    }
    if(userChoice === computerChoice) result = "Tie game!";
    return [result, computerChoice]; // 결과값 렌더
  
  };
  
  export const getRandomChoice = () => {
    let choiceNames = Object.keys(CHOICES); //CHOICES 오브젝트의 키만 불러오기
    let randomIndex = Math.floor(Math.random()*3); //randomIndex 는 랜덤수(0,1,2)
    let choiceName = choiceNames[randomIndex]; // choiceName 은 오브젝트 배열의 랜덤번째 객체키
    return CHOICES[choiceName]; // CHOICES 의 랜덤객체
  };
  
  export const CHOICES = {
    scissors: {
      name: "scissors",
      url: "http://www.rockyespy.com/Code%20and%20Functions/Game%20-%20Rock%20Paper%20Scissors/images/scissors.png"
    },
    paper: {
      name: "paper",
      url: "http://www.rockyespy.com/Code%20and%20Functions/Game%20-%20Rock%20Paper%20Scissors/images/paper.png"
    },
    rock: {
      name: "rock",
      url:
        "http://www.rockyespy.com/Code%20and%20Functions/Game%20-%20Rock%20Paper%20Scissors/images/rock.png"
    }
  };
  