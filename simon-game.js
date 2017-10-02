var gameArr = [];
var playerArr = [];
var choices = [1, 2, 3, 4];
var num = 0;
var numID = 0;
var userMoves = 0;
var isStrict = false;
$("#count").html("Current Count: 0");

$("#checkbox").change(function(e){
    strictMode();
})

function strictMode() {
  isStrict = !isStrict;
}
  function simonSays() {
  $("#count").html("Current Count: " + gameArr.length);
  userMoves = 0;
  playerArr = [];
  if (gameArr.length == 21) {
    $("#result").html("Congrats! You win!");
  } else {
    getNumber();
    gameArr.push(num);
    var currentSoundIndex = 0;
    function playSound() {
      if (currentSoundIndex == gameArr.length) return;
      if (gameArr[currentSoundIndex] === 1) {
        setTimeout(function() {
          greenSound();
          playSound();
        }, 500);
      }
      if (gameArr[currentSoundIndex] === 2) {
        setTimeout(function() {
          redSound();
          playSound();
        }, 500);
      }
      if (gameArr[currentSoundIndex] === 3) {
        setTimeout(function() {
          blueSound();
          playSound();
        }, 500);
      }
      if (gameArr[currentSoundIndex] === 4) {
        setTimeout(function() {
          yellowSound();
          playSound();
        }, 500);
      }
      currentSoundIndex++;
    }
    playSound();
  }
}
function playerEasy(e) {
  if (gameArr[userMoves] != parseInt(e.id)) {
    if (isStrict === false) {
      $("#result").html("Oops! Try again!");
      setTimeout(function() {
        replay();
      }, 1000);
      console.log("e " + e);
    } else {
      $("#result").html("Oops! Start Over!");
      setTimeout(function() {
        startOver();
      }, 1000);
    }
  } else {
    playerArr.push(parseInt(e.id));
    console.log("player " + playerArr);
    userMoves++;
  }
  if (gameArr.length === userMoves) {
    console.log("playerArr " + playerArr);
   setTimeout(simonSays, 1000);
  }
}
function startOver() {
  gameArr = [];
  playerArr = [];
  userMoves = 0;
  $("#result").html(" ");
  $("#count").html("Current Count: 0");
  console.log(gameArr);
  $("#result").html("Simon Game");
  simonSays();
}

function replay() {
  playerArr = [];
  var currentSoundIndex = 0;

  function playSound() {
    if (currentSoundIndex == gameArr.length) return;
    if (gameArr[currentSoundIndex] === 1) {
      setTimeout(function() {
        greenSound();
        playSound();
      }, 500);
    }
    if (gameArr[currentSoundIndex] === 2) {
      setTimeout(function() {
        redSound();
        playSound();
      }, 500);
    }
    if (gameArr[currentSoundIndex] === 3) {
      setTimeout(function() {
        blueSound();
        playSound();
      }, 500);
    }
    if (gameArr[currentSoundIndex] === 4) {
      setTimeout(function() {
        yellowSound();
        playSound();
      }, 500);
    }
    currentSoundIndex++;
  }
  playSound();
  console.log("replayed");
}

//Random number generator
function getNumber() {
  num = Math.floor(Math.random() * 4 + 1);
}

//Sound functions
function greenSound() {
  document.getElementById("1").innerHTML =
    "<embed src='https://s3.amazonaws.com/freecodecamp/simonSound1.mp3' autostart=true loop=false volume=100 hidden=true>";
  $("#1").addClass("one-active");
  setTimeout(function() {
    $("#1").removeClass("one-active");
  }, 100);
  return true;
}
function redSound() {
  document.getElementById("2").innerHTML =
    "<embed src='https://s3.amazonaws.com/freecodecamp/simonSound2.mp3' autostart=true loop=false volume=100 hidden=true>";
  $("#2").addClass("two-active");
  setTimeout(function() {
    $("#2").removeClass("two-active");
  }, 100);
  return true;
}
function blueSound() {
  document.getElementById("3").innerHTML =
    "<embed src='https://s3.amazonaws.com/freecodecamp/simonSound3.mp3' autostart=true loop=false volume=100 hidden=true>";
  $("#3").addClass("three-active");
  setTimeout(function() {
    $("#3").removeClass("three-active");
  }, 100);
  return true;
}
function yellowSound() {
  document.getElementById("4").innerHTML =
    "<embed src='https://s3.amazonaws.com/freecodecamp/simonSound4.mp3' autostart=true loop=false volume=100 hidden=true>";
  $("#4").addClass("four-active");
  setTimeout(function() {
    $("#4").removeClass("four-active");
  }, 100);
  return true;
}


