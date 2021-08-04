var mL = {
    speed: 100
}
const con = document.querySelector(".con1");
let text = document.querySelector(".text");
var stext = text.textContent.split("");
text.innerHTML = ""; 
for(var i = 0; i < stext.length; i++){
    text.innerHTML += "<span>"+ stext[i] + "</span>";

};

var timer = setInterval(add, mL.speed);
var e = 0;

function add(){
    if(e === stext.length){
        end();
        return;
    }else{
        var addclass = document.querySelectorAll("span")[e];
        addclass.classList.add("done");
        e++;
    }
}
function end(){
    clearInterval(timer);
}



console.log(window.document.activeElement);