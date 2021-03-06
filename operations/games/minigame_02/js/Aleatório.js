var playing = false;
var score;
var action, action1;
var timeremaining;
var y, x, num;
var pos;
var simbolo;

function startGame() {
    if (playing === true) {
      location.reload(true);
    } else {
      playing = true;
      show("timeremainingBox");
      timeremaining = 60;
      document.getElementById("timeremainingvalue").innerHTML = timeremaining;
      score = 0;
      document.getElementById("scorevalue").innerHTML = this.score;
      hide("gameOverBox");
      document.getElementById("startresetBox").innerHTML = "Resetar Jogo";
      generateQA();
      generateNumbers();
      startCountdown();
    }
}

function generateNumbers() {
  for (i = 0; i < 10; i++) {
    document.getElementById("box"+i).innerHTML = i;
  }
}

function correction(num) {
    if (playing === true) {
      num = document.getElementById("box"+num).innerHTML;
      switch (simbolo) {
        case 1:
          if (pos == 1) {
            document.getElementById("questionBox").innerHTML = x + " + " + num + " = " + z;
          } else {
            document.getElementById("questionBox").innerHTML = num + " + " + x + " = " + z;
          }
          break;
        case 2:
          if (pos == 1) {
            document.getElementById("questionBox").innerHTML = x + " - " + num + " = " + z;
          } else {
            document.getElementById("questionBox").innerHTML = num + " - " + y + " = " + z;
          }
          break;
        case 3:
          if (pos == 1) {
            document.getElementById("questionBox").innerHTML = x + " * " + num + " = " + z;
          } else {
            document.getElementById("questionBox").innerHTML = num + " * " + x + " = " + z;
          }
          break;
        case 4:
          document.getElementById("questionBox").innerHTML = x + " / " + num + " = " + z;
          break;
      }
          if (document.getElementById("box"+num).innerHTML == y) {
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            setTimeout(function() {
              generateQA();
            }, 1000);
          } else {
            switch (simbolo) {
              case 1:
                if (pos == 1) {
                  document.getElementById("questionBox").innerHTML = x + " + " + num + " = " + z;
                } else {
                  document.getElementById("questionBox").innerHTML = num + " + " + x + " = " + z;
                }
                break;
              case 2:
                if (pos == 1) {
                  document.getElementById("questionBox").innerHTML = x + " - " + num + " = " + z;
                } else {
                  document.getElementById("questionBox").innerHTML = num + " - " + y + " = " + z;
                }
                break;
              case 3:
                if (pos == 1) {
                  document.getElementById("questionBox").innerHTML = x + " * " + num + " = " + z;
                } else {
                  document.getElementById("questionBox").innerHTML = num + " * " + x + " = " + z;
                }
                break;
              case 4:
                document.getElementById("questionBox").innerHTML = x + " / " + num + " = " + z;
                break;
            }
            setTimeout(function() {
              stopCountdown();
            }, 1000);
          }
    }
}


function startCountdown() {
  action = setInterval(function() {
    timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    if (timeremaining === 0) {
      stopCountdown();
    }
  }, 1000);
}

function generateQA() {
  simbolo = 1 + Math.round(3 * Math.random());
  switch (simbolo) {
    case 1:
      x = Math.round(9 * Math.random());
      y = Math.round(9 * Math.random());
      z = x + y;
      pos = 1 + Math.round(2 * Math.random());
      num = "_";
      if (pos == 1) {
        document.getElementById("questionBox").innerHTML = x + " + " + num + " = " + z;
      } else {
        document.getElementById("questionBox").innerHTML = num + " + " + x + " = " + z;
      }
      break;
    case 2:
      x = Math.round(9 * Math.random());
      y = Math.round(9 * Math.random());
      z = x - y;
      pos = 1 + Math.round(1 * Math.random());
      num = "_";

      if (pos == 1) {
        document.getElementById("questionBox").innerHTML = x + " - " + num + " = " + z;
      } else {
        document.getElementById("questionBox").innerHTML = num + " - " + y + " = " + z;
      }
      break;
    case 3:
      x = 1 + Math.round(9 * Math.random());
      y = 1 + Math.round(8 * Math.random());
      z = x * y;
      pos = 1 + Math.round(2 * Math.random());
      num = "_";
      if (pos == 1) {
        document.getElementById("questionBox").innerHTML = x + " * " + num + " = " + z;
      } else {
        document.getElementById("questionBox").innerHTML = num + " * " + x + " = " + z;
      }
      break;
    case 4:
      z = 1 + Math.round(9 * Math.random());
      y = 1 + Math.round(8 * Math.random());
      x = z * y;
      num = "_";
      correctAnswer = y;
      document.getElementById("questionBox").innerHTML = x + " / " + num + " = " + z;
      break;
  }
}

function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

function show(Id) {
  document.getElementById(Id).style.display = "block";
}

function stopCountdown() {
  clearInterval(action);
  show("gameOverBox");
  document.getElementById("gameOverBox").innerHTML =
    "<p>Fim de jogo!</p><p>Sua pontuação foi " + score + ".</p>";
  hide("timeremainingBox");
  playing = false;
  document.getElementById("startresetBox").innerHTML = "Começar Jogo";
}
