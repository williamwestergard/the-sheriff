let nextButton = 0;
let namePlayer = document.getElementById("name-inputField");

function nextClicked() {
  nextButton += 1;
  let message = "";
  if (nextButton == 1) {
    message = "I'm sure you already know about this town's little 'situation'.";
  } else if (nextButton == 2) {
    message = "Oh, you don't?";
  } else if (nextButton == 3) {
    message = "Well then, I hope you don't mind if I ask you a few questions.";
  } else if (nextButton == 4) {
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("name-input").style.display = "block";
  }
  document.getElementById("message").innerHTML = message;
}

let nameResult = namePlayer
function nameInput() {
  document.getElementById("name-input").style.display = "none";
  document.getElementById("dogs-cats").style.display = "block";
  document.getElementById("cowboy").style.display = "none";
  document.getElementById("dog-and-cat").style.display = "block";
  document.getElementById("name-declared").innerHTML =
    "Welcome " + namePlayer.value + ".";
}

let dogs = 0;
let cats = 0;

function dogClicked() {
    dogs += 1;
}
function catClicked() {
    cats += 1;
}


function question2() {
    document.getElementById("dog-and-cat").style.display = "none";
  document.getElementById("dogs-cats").style.display = "none";
  document.getElementById("puppies-kittens").style.display = "block";
  document.getElementById("puppy-and-kitten").style.display = "block";
}

function questionResults() {
  document.getElementById("puppies-kittens").style.display = "none";
  document.getElementById("puppy-and-kitten").style.display = "none";
  document.getElementById("cowboy").style.display = "block";
  document.getElementById("results").style.display = "block";
}

let resultsButton = 0;

function resultsButtonClicked() {
  resultsButton += 1;
  let message = "";
  if (resultsButton == 1) {
    message = "<br>You see, this town is in a war between cat lovers and dog lovers.";
}
  else if (resultsButton == 2) {
    message = "<br/>Take this.<br/> <br> Use it as a weapon if you ever need it.";
    document.getElementById("banana").style.backgroundColor = "#d4ccb3";
    document.getElementById("slingshot").style.backgroundColor = "#d4ccb3";
    document.getElementById("bazooka").style.backgroundColor =  "#d4ccb3";

    document.getElementById("cowboy").style.display = "none";
    if (dogs == 2) {
      document.getElementById("banana").style.display = "block";
    } else if (cats == 2) {
      document.getElementById("bazooka").style.display = "block";
    } else {
      document.getElementById("slingshot").style.display = "block";
    }
  } else if (resultsButton == 3) {
    message = "Now then, I'll be on my way.";
    document.getElementById("cowboy").style.display = "block";
    if (dogs == 2) {
        document.getElementById("banana").style.display = "none";
      } else if (cats == 2) {
        document.getElementById("bazooka").style.display = "none";
      } else {
        document.getElementById("slingshot").style.display = "none";
      }
  } else if (resultsButton == 4) {
    message =
      "Stay out of trouble now " + namePlayer.value + ".";
    document.getElementById("resultsButton").style.display = "none";
    document.getElementById("cowboy").style.display = "none";
    document.getElementById("discord").style.display = "block";
    document.getElementById("dog-vs-cat").style.display = "block";

  }
  document.getElementById("results-message").innerHTML = message;
}
