
var buttonnumber = document.querySelectorAll(".drum").length;

for(var i=0; i < buttonnumber; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // console.log(this)
        // console.log(this.innerHTML)
        // this.style.color = "green"

       var buttoninnerhtml = this.innerHTML
       makesound(buttoninnerhtml)
       buttonanimation(buttoninnerhtml)
   
    })
}
// document.addEventListener("keypress", function(event){
//     console.log(event);
// })

document.addEventListener("keypress",function(event) {
    makesound(event.key)
    buttonanimation(event.key)
});

function makesound(key){
     switch(key){
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var  snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();git 
            break;
        case "j":
            var crash3 = new Audio('sounds/tom-2.mp3');
            crash3.play();
            break;
        case "k":
             var tom3 = new Audio('sounds/tomd-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default: console.log(key)
       }

}

function buttonanimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)
}