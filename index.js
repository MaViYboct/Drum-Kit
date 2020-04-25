

var nums = document.querySelectorAll(".drum").length;

for (var i = 0; i<nums;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event){
  console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch(key) {
  case "1":
  var crash = new Audio("sounds/crash.mp3");
  crash.play();
  break;
  case "2":
  var kick = new Audio("sounds/kick-bass.mp3");
  kick.play();
  break;
  case "3":
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  break;
  case "4":
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;
  case "5":
  var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;
  case "6":
  var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;
  case "7":
  var tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  }
}

function buttonAnimation(key){
  var activeButton = document.querySelector(".d" + key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
